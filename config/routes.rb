Rails.application.routes.draw do
  resources :lesson_payments
  resources :bookings
  resources :schedules
  resources :clients
  resources :trainers
  resources :lessons
  resources :users
  resources :account

  post 'authenticate', to: 'authentication#authenticate'

  get 'api/lessons', to: 'lessons#index'
  get 'api/lessons/:id', to: 'lessons#show'
  post 'api/lessons', to: 'lessons#create'
  put 'api/lessons/:id', to: 'lessons#update'
  delete 'api/lessons/:id', to: 'lessons#delete'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    puts "Falling back to index.html..."
    !request.xhr? && request.format.html?
  end
end
