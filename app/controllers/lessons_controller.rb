class LessonsController < ApiController
  before_action :set_lesson, only: [:show, :update, :destroy]

  def index
    render json: Lesson.all.as_json, status: :ok
    # @lessons = Lesson.paginate(:page => params[:page], :per_page => 6).order('sort ASC')
  end

  def show
    @others = Lesson.paginate(:page => params[:page], :per_page => 4).order('sort ASC')
  end

  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      render json: @lesson, status: :created, status: :ok
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def update
    if @lesson.update(lesson_params)
      render json: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @lesson.destroy
  end

  private
  def set_lesson
      @lesson = Lesson.find(params[:id])
  end

  def lesson_params
    params.require(:lesson).permit(:image, :title, :duration, :cost, :category, :language, :level, :description)
  end
end
