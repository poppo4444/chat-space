class GroupsController < ApplicationController

  before_action :set_group, only: [:edit, :update]
  before_action :authenticate_user!

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: "グループが作成されました"
    else
      flash.now[:alert] = "エラーが発生しました"
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: "グループが編集されました"
    else
      render :edit, alert: "エラーが発生しました"
    end
  end

  private

    def group_params
      params.require(:group).permit(:name, user_ids: [])
    end

    def set_group
      @group = Group.find(params[:id])
    end

  end
