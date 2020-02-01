class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
  
    @@JWT_SECRET_KEY = 'it is bad to keep your secret key here'

    def authorize_request
        header = request.headers['Authorization']
 
        # The Authorization header is in the format of "Bearer <jwt>"
        # we split by space to get the token
        token = header.split(' ')[1]      
        begin         
            @user_jwt = jwt_decode(token)
            @current_user = User.find(@user_jwt[:user_id]) #this line of code => cannot find current_user
            rescue ActiveRecord::RecordNotFound => e
                render json: { errors: e.message }, status: :unauthorized
            rescue JWT::DecodeError => e
                render json: { errors: e.message }, status: :unauthorized
        end
    end

    def fallback_index_html
        render :file => 'public/index.html'
    end

    protected 

    def jwt_encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, @@JWT_SECRET_KEY)
    end
    
    def jwt_decode(token)
        decoded = JWT.decode(token, @@JWT_SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end
    
end
