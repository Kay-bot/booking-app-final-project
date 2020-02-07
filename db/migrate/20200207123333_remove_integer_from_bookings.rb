class RemoveIntegerFromBookings < ActiveRecord::Migration[6.0]
  def change

    remove_column :bookings, :integer, :string
  end
end
