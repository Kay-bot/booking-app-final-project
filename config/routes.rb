Rails.application.routes.draw do
  resources :lesson_payments
  resources :bookings
  resources :schedules
  resources :clients
  resources :trainers
  resources :lessons
  resources :users
  resources :accounts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
