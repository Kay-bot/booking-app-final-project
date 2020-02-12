Rails.application.routes.draw do
  resources :lesson_payments
  resources :bookings
  resources :clients
  resources :trainers
  resources :accounts
  resources :lessons

 #schedules
  get ' /schedules/:id', to: 'schedules#show'
  post '/schedules', to: 'schedules#create'

  #users
  post 'login', to: 'users#login'
  get '/users', to: 'users#index'
  post  '/users', to: 'users#create'
  get '/users/:id', to: 'users#show'
  put  '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#delete'
  post 'booking/:lesson_id', to: 'users#create_booking'
  post 'lesson/payment', to: 'users#create_client'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end
end
