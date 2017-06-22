class ImageUploader < CarrierWave::Uploader::Base

# リサイズしたり画像形式を変更するのに必要
  include CarrierWave::MiniMagick
  # require 'carrierwave/storage/fog'
  
  storage :file

  # 保存形式をJPGにする
  # process convert: 'jpg'

 # S3やローカルの保存先。
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # 画像を100x100にリサイズする。
  # process :resize_to_fill => [100, 100]

  # サムネイルを生成する設定
  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [400, 200]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:

   # jpg,jpeg,gif,pngしか受け付けない
  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
    # 拡張子が同じでないとPNGをJPGとかにコンバートできないので、ファイル名を変更
  def filename
    "#{Time.zone.now.strftime('%Y%m%d%H%M%S')}.jpg" if original_filename
  end

end
