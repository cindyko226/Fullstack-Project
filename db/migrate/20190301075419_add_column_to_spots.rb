class AddColumnToSpots < ActiveRecord::Migration[5.2]
  def change
     add_column :spots, :home_type, :string, null: false
  end
end
