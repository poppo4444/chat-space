class GroupsController < ApplicationController

  def new
    @group = Group.new
    @user  = User.all
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
