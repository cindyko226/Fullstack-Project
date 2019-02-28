class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|

      t.string :state, null: false
      t.string :city, null: false 
      t.string :address, null: false
      t.float :lat, null:false 
      t.float :lng, null: false
      t.string :name, null: false
      t.integer :guests, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :bathrooms, null: false 
      t.text :description, null: false
      t.integer :rate, null: false 
      t.integer :host_id, null: false 

      t.timestamps
    end
    
    add_index :spots, :host_id
    add_index :spots, :city 
    
  end
end
