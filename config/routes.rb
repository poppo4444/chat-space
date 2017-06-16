Rails.application.routes.draw do

  root "messages#index"
  resources :users, only: [:update,:edit]
  devise_for :users
  resources :group
end

