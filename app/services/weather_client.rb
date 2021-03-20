class WeatherClient
  BASE_URL = "https://api.openweathermap.org/data/2.5/weather".freeze
  API_KEY = Rails = Rails.application.credentials.api_key

  def get_weather(params)
    response = client.get(BASE_URL, weather_params(params))
    JSON.parse(response.body)
  rescue Faraday::ConnectionFailed => e
    raise ExceptionHandler::ConnectionError, e.message
  end

  private

  def weather_params(params)
    weather_params={
      q: params[:city],
      appid: API_KEY
    }
  end

  def client
    # Faraday.new('http://www.example.com', proxy: 'http://proxy.com')
    @_client ||= Faraday.new(BASE_URL) do |client|
      client.request :url_encoded
      client.adapter Faraday.default_adapter
    end
  end

end