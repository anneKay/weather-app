class V1::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.persisted?
      payload = { user_id: @user.id }
      # token = JwtProvider.encode(payload)
      # response.headers['Authorization'] = token
      render json: @user, status: :created
    else
      render json: { error: @user.errors.full_messages }, status: :bad_request
    end
      
  end

  private

  def user_params
    params.permit(:email, :name, :password)
  end
end
