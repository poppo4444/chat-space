Rails.application.routes.draw do

  root "groups#index"
  resources :users, only: [:update,:edit]
  devise_for :users
  resources :groups, except: [:show]
end

