class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|

      t.timestamps
      t.text :body
      t.text :image
      t.integer :user_id,null: false,foreign_key: true

    end
  end
end
