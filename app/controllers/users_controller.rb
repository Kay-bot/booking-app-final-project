class UsersController < ApiController

  before_action :set_lesson, only: [:new]
  before_action :authenticate_request, except: %i[create, index, get_id]
  

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

  def get_id
    user = User.find_by(id: params[:user_id])
    if user
      render json: user.name, status: :ok
    else
      render json: { errors: "User not found" }, status: :not_found
    end
  end

  def update
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

   ##------Booking Logic------##----------##---------------------###

  def new
    @lesson = Lesson.find_by(id: params[:lesson_id])
    @account = Account.new
    @user = User.new 
    @client = Client.new
    @booking = Booking.new
    @lesson_payment = LessonPayment.new
    @schedules = Schedule.where('start >= ? and start <=  ?', Date.today + 1.day, Date.today + 2.weeks).where(title: 'Available').order('start ASC').all
  end

  def create_booking
    @lesson = Lesson.find_by(id: params[:lesson_id])
    # create_client_charge
    #to decide how I am going to do it
    create_client_account  
      @user = User.new()
      @user.account_id = @account.id
        
        if @user.save
          create_client_profile
          create_client_booking
          create_client_lesson_payment
        
          render json: @booking.to_json, status: :created
        else
          render json: {errors: "Booking failed"}, status: :unprocessable_entity
        end
     
  end
      ##------Booking Logic------##----------##---------------------###
  private

    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      # render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end

    def set_lesson
      @lesson = Lesson.find(params[:lesson_id])
    end

    def create_client_account
      @account = Account.new()
      @account.account_type = 'client'
      @account.save
    end

    def create_client_profile
      @client = Client.new()
      @client.firstname = params[:user][:client][:firstname]
      @client.lastname = params[:user][:client][:lastname]
      @client.phone = params[:user][:client][:phone]
      @client.user_id = @user.id
      @client.account_id = @user.account_id
      @client.save
    end
    
    def create_client_booking
      @lesson = Lesson.find(params[:user][:booking][:lesson_id])
      @booking = Booking.new()
      @booking.lesson_id = params[:user][:booking][:lesson_id]
      @booking.schedule_id = params[:user][:booking][:schedule_id]
      @booking.client_id = @client.id
      @booking.account_id = @user.account_id
      @booking.title = @lesson.title
      @booking.cost = @lesson.cost
      @booking.status = 'Booked'
      @booking.save
      @schedule = Schedule.find(params[:user][:booking][:schedule_id])
      @booking.trainer_id = @schedule.trainer_id
      @booking.start = @schedule.start
      @booking.refunded = 0
      @booking.save
      @schedule.title = 'Booked'
      @schedule.save
    end
   def create_client_lesson_payment
      @lesson_payment = LessonPayment.new()
      @lesson_payment.status = 'Paid'
      @lesson_payment.date = Date.today
      @lesson_payment.cost = @lesson.cost
      @lesson_payment.service = @lesson.title
      @lesson_payment.booking_id = @booking.id
      @lesson_payment.account_id = @user.account_id
      @lesson_payment.save
    end

end
