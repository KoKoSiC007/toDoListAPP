Rails.application.routes.draw do

  resources :projects
  resources :todos

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'projects#index'
  # put  'todos'

end
