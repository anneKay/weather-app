class V1::WeatherController < ApplicationController

  def get_weather
    weather = WeatherClient.new
    response = weather.get_weather(weather_params)
    if response
      render json: { message: "success", data: response}
    else
      render json: { error: 'we could not get the weather at this time' }
    end
  end

  private

  def weather_params
    params.permit(:city)
  end
end