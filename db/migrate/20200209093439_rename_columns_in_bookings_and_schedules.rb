class RenameColumnsInBookingsAndSchedules < ActiveRecord::Migration[6.0]
  def change
    rename_column :bookings, :start, :date
    rename_column :schedules, :start, :date
    rename_column :schedules, :end, :time
  end
end
