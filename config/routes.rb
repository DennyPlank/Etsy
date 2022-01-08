Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :sellers
    get '/categories', to: 'products#categories'
    get '/productSearch', to: 'buyers#index'
  end
end
