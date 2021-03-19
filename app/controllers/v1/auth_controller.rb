class V1::AuthController < ApplicationController
  skip_before_action :authorized_user, only: :login

  def login
    token = JwtProvider.encode('user_id': user.id) if user.present?
    response.headers['Authorization'] = token
    render json: user, status: :ok
  end

  private

  def user
    user ||= User.find_by(email: auth_params[:email])
    return user if user.present? && user.authenticate(auth_params[:password])

    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end

  def auth_params
    params.permit(:email, :password)
  end
end
