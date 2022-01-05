Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :sellers
    get '/categories', to: 'products#categories'
  end
end
