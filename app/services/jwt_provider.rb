class JwtProvider

  SECRET_KEY = Rails.application.credentials.secret_key_base
  
  def self.encode(payload, exp = 24.hours.from_now)
    # expire token after 24 hours
    payload[:Exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    # add ability to access key as symbol or string
    HashWithIndifferentAccess.new decoded
  rescue JWT::DecodeError => e
    raise ExceptionHandler::InvalidToken, e.message
  end
end
