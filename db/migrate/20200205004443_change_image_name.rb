class ChangeImageName < ActiveRecord::Migration[6.0]
  def change
    rename_column :lessons, :image, :url
  end
end
