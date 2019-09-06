Rails.application.routes.draw do
  # root route
  root 'site#index'

  # movies routes
  get '/movies', to: 'movies#index'
  get '/movies/:id', to: 'movies#show'
  post '/movies', to: 'movies#create'
  delete '/movies/:id', to: 'movies#delete'
  put '/movies/:id', to: 'movies#update'
end
