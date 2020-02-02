Rails.application.routes.draw do
  resources :lesson_payments
  resources :bookings
  # resources :schedules
  resources :clients
  resources :trainers
  resources :lessons
  # resources :users
  resources :accounts

  get 'api/lessons', to: 'lessons#index'
  post 'lessons', to: 'lessons#create'

  get 'api/users', to: 'users#index'
  post 'api/users', to: 'users#create'
  post "api/users/login", to: "users#login"
  get 'api/users/:user_id', to: 'users#get_user_id'
  put 'api/users/:user_id', to: 'users#update_profile'
  delete 'api/users/:user_id', to: 'users#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
