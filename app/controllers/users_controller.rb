class UsersController < ApplicationController

  def index
    @users = User.serch_users(params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if  current_user.update(user_params)
      render template: "messages/index"
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end
