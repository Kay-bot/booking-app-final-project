class UsersController < ApiController

  before_action :authenticate_request, except: %i[create index, get_by_id]

  attr_reader :current_user
   

  def index
    @users = User.all
    render json: @users, status: :ok
  end
  
  def create
    userParams = params.require(:user)
      .permit(:email, :password, :password_confirmation)
    user = User.new(userParams)
    if user.save()
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def get_by_id
    user = User.find_by(id: params[:user_id])
    if user
      render json: user.name, status: :ok
    else
      render json: { errors: "User not found" }, status: :not_found
    end
  end

  def update_user
    user = User.find_by(id: params[:user_id])
    if user
      userParams = params.require(:user)
        .permit(:email, :password, :password_confirmation)

      user.name = userParams["name"]
      user.email = userParams["email"]
      user.password = userParams["password"]
      user.password_confirmation = userParams["password_confirmation"]

      if user.save()
        render json: user, status: :ok
      else
        render json: { errors: "update failed" }, status: :bad_request
      end
    else
      render json: { errors: "User not found" }, status: :not_found
    end
  end

  def delete
    user = User.find_by(id: params[:user_id])
    if user
      if user.destroy()
        render json: { message: "user deleted" }, status: :ok
      else
        render json: { errors: "delete failed" }, status: :bad_request
      end
    else
      render json: { errors: "User not found" }, status: :not_found
    end
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
