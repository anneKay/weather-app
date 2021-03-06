Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1 do
    resources :users, only: [:create, :show]
    get "weather" => "weather#get_weather"
    post "auth/login"
  end

  get '*page', to: 'home#index', constraints: -> (req) do 
    !req.xhr? && req.format.html?
  end

  root 'home#index'
end
