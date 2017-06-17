class CreateUsersGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :users_groups do |t|
      t.integer :group_id,foreign_key: true
      t.integer :user_id,foreign_key: true
      t.timestamps

    end
  end
end
