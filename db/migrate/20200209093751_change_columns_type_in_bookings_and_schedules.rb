class ChangeColumnsTypeInBookingsAndSchedules < ActiveRecord::Migration[6.0]
  def change
    change_column :bookings, :date, :string
    change_column :schedules, :date, :string
    change_column :schedules, :time, :string
  end
end
