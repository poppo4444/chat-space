class UsersController < ApplicationController

  def edit
    @user = User.find(params[:id])
  end

  def update
    if  current_user.update(user_params)
      render template: "messages/index"
    else
      render 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end