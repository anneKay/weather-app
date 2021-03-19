module ExceptionHandler
  extend ActiveSupport::Concern

  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end
  class MissingSecretKey < StandardError; end

  included do
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :unprocessable_request
    rescue_from ExceptionHandler::InvalidToken, with: :unprocessable_request
    rescue_from ExceptionHandler::MissingSecretKey, with: :unprocessable_entity
  end

  private

  # JSON response with Status code 422 - unprocessable entity
  def unprocessable_request(e)
    render json: { message: e.message }, status: :unprocessable_entity
  end

  #JSON response with Status code 401 - Unauthorized
  def unauthorized_request(e)
    render json: { message: e.message }, status: :unauthorized
  end
end
