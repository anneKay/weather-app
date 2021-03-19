class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
    include ExceptionHandler

  before_action :authorized_user
  attr_reader :current_user

  private

  def authorized_user
    @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
  end
end

