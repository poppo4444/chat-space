class MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
  end

  def show
  end

  def new
  end

  def create
  end

end
