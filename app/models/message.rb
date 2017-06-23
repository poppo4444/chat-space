class Message < ApplicationRecord
   mount_uploader :image, ImageUploader

   validates :body, presence: true, unless: :image?
   validates :group_id, presence: true
   validates :user_id,presence: true
   belongs_to :group
   belongs_to :user

end
