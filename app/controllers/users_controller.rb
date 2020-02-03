class UsersController < ApiController
  require 'jwt'
  # before_action :authorize_request, except: %i[create index]
  # before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    render json: User.all.as_json, status: 200
  end 

  def create
    userParams = params.require(:user)
      .permit(:name, :email, :password, :password_confirmation)
    user = User.new(userParams)
    if user.save()
      render json: user, status: :created
    else
      render json: { errors: !user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def get_user_id
      user = User.find_by(id: params[:user_id])
      if user
          render json: user, status: :ok
        else
          render json: { errors: "User not found" }, 
          status: :not_found
      end
  end

  def update_profile
      user = User.find_by(id: params[:user_id])
      if user
          userParams = params.require(:user)
          .permit(:first_name, :last_name, :email, :password, :phone, :bio, :experience, :user_id, :account_id )

          user.first_name = userParams["first_name"]
          user.last_name = userParams["last_name"]
          user.email = userParams["email"]
          user.password = userParams["password"]
          user.phone = userParams["phone"]
          user.bio = userParams["bio"]
          user.experience = userParams["experience"]
          user.user_id = userParams["user_id"]
          user.ccount_id = userParams["ccount_id"]

          if user.save()
              render json: user, status: :ok
          else 
              render json: { errors: "update failed" }, 
              status: :bad_request
          end 
      else user.save()
          render json: { errors: "User not found" }, 
          status: :not_found
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
