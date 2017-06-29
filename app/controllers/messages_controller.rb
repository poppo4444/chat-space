class MessagesController < ApplicationController

  before_action :find_group_params_id, only: [:index,:create]
  before_action :authenticate_user!
  def index
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      respond_to do |format|
        format.json
        format.html {
          redirect_to group_messages_path(params[:group_id]), notice: "メッセージが作成されました"
        }
      end
    else
      flash.now[:alert] = "エラーが発生しました"
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id], user_id: current_user.id)
  end

  def find_group_params_id
    @group = Group.find(params[:group_id])
    @messages = @group.messages.includes(:user).order('created_at DESC')
  end

end
