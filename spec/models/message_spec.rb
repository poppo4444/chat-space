require 'rails_helper'

describe Message do
  describe '#create' do

    # メッセージが保存できる場合のテスト
    it "メッセージがあれば保存できる" do
      message = build(:message, image: "")
      expect(message).to be_valid
    end

    it "画像があれば保存できる" do
      message = build(:message, body: "")
      expect(message).to be_valid
    end

    it "メッセージと画像があれば保存できる" do
      message = build(:message)
      expect(message).to be_valid
    end

    # メッセージが保存できない場合のテスト
    it "メッセージも画像もないと保存できない" do
      message = build(:message, body: "", image: "")
      message.valid?
      expect(message.errors[:body]).to include("を入力してください")
    end

    it "group_idがないと保存できない" do
      message = build(:message, group_id: "")
      message.valid?
      expect(message.errors[:group_id]).to include("を入力してください")
    end

    it "user_idがないと保存できない" do
      message = build(:message, user_id: "")
      message.valid?
      expect(message.errors[:user_id]).to include("を入力してください")
    end

  end
end
