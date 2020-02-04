class LessonsController < ApiController


  before_action :set_lesson, only: [:show, :update, :destroy]

  LESSONS_PER_PAGE = 3

  def index
    @page = params.fetch(:page, 0).to_i
    @lessons = Lesson.offset(@page * LESSONS_PER_PAGE).limit(LESSONS_PER_PAGE)
    render json: @lessons, status: :ok
  end

  def show
    
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
    params.require(:lesson).permit(:title, :duration, :cost, :category, :language, :level, :description, images:[])
  end
end
