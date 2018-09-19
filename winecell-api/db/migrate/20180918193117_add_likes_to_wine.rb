class AddLikesToWine < ActiveRecord::Migration[5.2]
  def change
    add_column :wines, :likes, :integer, default: 0
    
  end
end
