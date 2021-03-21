class AuthorizeApiRequest

  def initialize(headers)
    @headers = headers
  end

  def call
    { user: user }
  end

  private

  attr_reader :headers

  def get_token_from_header
    return auth_header.split(' ').last if auth_header.present?
    raise(ExceptionHandler::MissingToken, "Missing token")
  end

  def auth_header
    headers['Authorization']
  end

  def decoded_token
    @decode_token ||= JwtProvider.decode(get_token_from_header) if get_token_from_header
  end

  def user
    @user ||= User.find(decoded_token["user_id"]) if decoded_token
  rescue ActiveRecord::RecordNotFound => e
    raise(
      ExceptionHandler::InvalidToken,
      ("#{"Invalid token"} #{e.message}")
    )
  end

end
