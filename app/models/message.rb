class Message < ApplicationRecord
   mount_uploader :image, ImageUploader

   validates :image_or_body, presence: true
   belongs_to :group
   belongs_to :user

   private
   
    def image_or_body
      image.presence or body.presence
    end
end
