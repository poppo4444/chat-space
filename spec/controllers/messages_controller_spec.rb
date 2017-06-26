require 'rails_helper'

describe MessagesController, type: :controller do
  let(:user) {create(:user)}
  let(:message){build(:message)}
  let(:group){create(:group)}
  let(:message_params){{
    message: attributes_for(:message),
    group_id: group.id,
    user_id: user.id
  }}
    let(:invalid){{
    message: attributes_for(:message,{body: nil,image: nil}),
    group_id: group.id,
    user_id: user.id
  }}

  describe 'GET #index ' do
    context "ログインしている時" do
      before do 
        login_user user
        get :index, params: { group_id: group.id }
      end

      it "@groupが期待される値" do
        expect(assigns(:group)).to eq group
      end

      it "@messageが期待される値" do
        expect(assigns(:message)).to be_a_new(Message)
      end

      it "indexで定義している@messagesは作用するのか" do
        messages = create_list(:message, 30, group_id: group.id)
        expect(assigns(:messages)).to match(messages.sort{ |a,b| b.created_at <=> a.created_at})
      end

      it "indexのビューに遷移するか" do
        expect(response).to render_template :index
      end
    end
    context "ログインしていない時" do
      it "意図したビューにリダイレクトできているか" do
        get :index, params: { group_id: group.id}
        expect(response).to redirect_to new_user_session_path
      end
    end
  end

  describe 'POST #create' do
    before do 
    login_user user
    end
      context "ログインしていて保存に成功した時" do
        before do
          post :create, params: message_params
        end
          it "メッセージ保存成功するか" do
            expect do
              post :create, params: message_params
              end.to change(Message, :count)
          end

          it "メッセージ保存成功時にgroup/indexに遷移するか" do
              expect(response).to redirect_to group_messages_path(group.id)
          end

          it "メッセージ保存成功時にフラッシュメッセージが表示されるか" do
              expect(flash[:notice]).to include("メッセージが作成されました")
          end
      end
      context "ログインしているが保存に失敗した時" do
        before do
          post :create, params: message_params{{message: attributes_for(:message,{body: nil,image: nil})}}
        end
          it "保存に失敗したか" do
            expect do
            end.not_to change(Message, :count)
          end

          it "メッセージ保存失敗時にgroup/indexに遷移するか" do
            expect(response).to render_template :index
          end

          it "メッセージ保存失敗時にフラッシュメッセージが表示されるか" do
            expect(flash[:alert]).to include("エラーが発生しました")
          end
      end
  end
end
