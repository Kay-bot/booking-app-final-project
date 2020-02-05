class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    # before_action :authenticate_request, except: [:new, :create, :index, :authenticate], :raise => false
    # before_action :route_user

    attr_reader :current_user
   
   
    def fallback_index_html
        render :file => 'public/index.html'
    end


    private

    # def route_user
    #   target_path = '/authenticate'      
    #   if user_signed_in?       
    #     target_path =  '/admin/admins/dashboard' if current_user.admin?       
    #     target_path =  '/parent/parents/dashboard' if current_user.parent?       
    #     target_path =  '/mosque/mosques/dashboard' if current_user.mosque?
    #   end    
    #   redirect_to target_path
    # end

    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
    
end


