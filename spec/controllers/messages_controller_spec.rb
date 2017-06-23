equire 'rails_helper'

describe MessagesController, type: :controller do
  #ログイン時
  describe 'GET #index ' do
    it "アクション内で定義しているインスタンス変数があるか" do
    end

    it "該当するビューが描画されているか" do
    end
  #ログインしていない時
    it "意図したビューにリダイレクトできているか" do
    end
    
  end

  describe 'ログインしているかつ、保存に成功した時 ' do
    
    it "メッセージは保存されたか" do
    end
    
    it "意図した画面に遷移しているか" do
    end
  end
  
  describe 'ログインしているが、保存に失敗した場合' do
    it "メッセージの保存は行われなかったか" do
    end

    it "意図したビューが描画されているか" do
    end
  end
  
end
