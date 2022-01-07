class Api::BuyersController < ApplicationController
  def index
  render json: Product.buyer
  end
end
