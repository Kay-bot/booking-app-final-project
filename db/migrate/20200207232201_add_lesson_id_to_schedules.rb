class AddLessonIdToSchedules < ActiveRecord::Migration[6.0]
  def change
    add_column :schedules, :lesson_id, :integer
  end
end
