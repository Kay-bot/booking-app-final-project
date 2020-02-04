class UsersController < ApiController

  before_action :authorize_request, except: %i[create index]
 
  def index
    @users = User.all
    render json: @users, status: :ok
    authorize_request User
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
  
  def login
    user = User.find_by_email(params[:email])

    if !user
      render json: { error: "unauthorized" }, status: :unauthorized
      return
    end

    if !user.authenticate(params[:password])
      render json: { error: "unauthorized" }, status: :unauthorized
      return
    end

    token = jwt_encode({ user_id: user.id }, 24.hours.from_now)
    render json: { token: token, exp: 24, username: user.email, userId: user.id },
          status: :ok
  end

end
