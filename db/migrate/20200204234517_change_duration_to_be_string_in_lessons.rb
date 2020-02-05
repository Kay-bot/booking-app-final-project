class ChangeDurationToBeStringInLessons < ActiveRecord::Migration[6.0]
  def change
    change_column :lessons, :duration, :string
  end
end
