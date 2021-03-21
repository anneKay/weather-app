class HomeController < ApplicationController
  skip_before_action :authorized_user
  def index
  end

end
