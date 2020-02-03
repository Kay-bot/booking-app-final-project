class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    @@JWT_SECRET_KEY = 'to something else'

    def authorize_request
        header = request.headers['Authorization']
        token = header.split(' ')[1]      
        begin         
            @user_jwt = jwt_decode(token)
            @current_user = User.find(@user_jwt[:user_id])
            rescue ActiveRecord::RecordNotFound => e
                render json: { errors: e.message }, status: :unauthorized
            rescue JWT::DecodeError => e
                render json: { errors: e.message }, status: :unauthorized
        end
    end



    def jwt_encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, @@JWT_SECRET_KEY)
    end
    
    def jwt_decode(token)
        decoded = JWT.decode(token, @@JWT_SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end


    def fallback_index_html
        render :file => 'public/index.html'
    end

   
    
end


