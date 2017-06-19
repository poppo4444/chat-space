class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
      if @group.save 
        redirect_to controller: 'messages', action: 'index', flash: {notice: "グループの作成に成功しました"}

      else
        render action: new
      end
  end

  def edit
  end

  def update
  end

  def destroy
  end

private
  
  def group_params
    params.require(:group).permit(:name, {user_ids: []})
  end
end
