class CreateHoneys < ActiveRecord::Migration
  def change
    create_table :honeys do |t|
      t.string :name
      t.integer :bear_id

      t.timestamps
    end
  end
end
