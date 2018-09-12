class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :description
      t.string :type
      t.integer :price
      t.integer :year
      t.string :image

      t.timestamps
    end
  end
end
