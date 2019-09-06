Rails.application.routes.draw do
  # root route
  root 'site#index'

  # movies routes
  get 'api/movies', to: 'movies#index'
  get 'api/movies/:id', to: 'movies#show'
  post 'api/movies', to: 'movies#create'
  delete 'api/movies/:id', to: 'movies#delete'
  put 'api/movies/:id', to: 'movies#update'
end
