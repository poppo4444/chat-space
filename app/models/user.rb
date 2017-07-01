class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :name,presence: true, uniqueness: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :groups,through: :users_groups
  has_many :users_groups
  has_many :messages

  scope :serch_users, -> (keyword) {where('name LIKE(?)',"%#{keyword}%")}
end
