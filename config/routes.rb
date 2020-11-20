Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'cocktails#index'
  resources :cocktails, only: %i[new create show] do
    resources :doses, only: %i[create new]
  end
  resources :doses, only: [:destroy]
end
