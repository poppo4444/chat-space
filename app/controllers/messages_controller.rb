class MessagesController < ApplicationController

  before_action :set_group, only: [:index,:create]
  before_action :authenticate_user!
  def index
    @messages = @group.messages.includes(:user).order('created_at DESC')
    @message = Message.new
    respond_to do |format|
      format.json  do
    @last_id = @group.messages.where('id > ?',params[:last_id])

      end
      format.html {render :index}
    end
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

  def set_group
    @group = Group.find(params[:group_id])
  end

end
