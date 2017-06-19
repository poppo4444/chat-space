class Group < ApplicationRecord

  validates :name,presence: true, uniqueness: true

  has_many :users_groups
  has_many :users, through: :users_groups

end
