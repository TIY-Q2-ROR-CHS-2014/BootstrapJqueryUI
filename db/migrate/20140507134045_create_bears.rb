class CreateBears < ActiveRecord::Migration
  def change
    create_table :bears do |t|
      t.string :name

      t.timestamps
    end
  end
end
