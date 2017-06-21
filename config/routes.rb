Rails.application.routes.draw do

  root "groups#index"
  resources :users, only: [:update,:edit]
  devise_for :users
  resources :groups, except: [:destroy,:show] do
    resources :messages, only: [:new,:index,:create]
  end
end
