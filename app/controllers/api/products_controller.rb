class Api::ProductsController < ApplicationController
  
  def index
  render json: Product.by_seller
  end
   
  def categories
  render json: Product.by_category
  end

end
