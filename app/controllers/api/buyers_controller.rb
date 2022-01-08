class Api::BuyersController < ApplicationController
  def index
  render json: Product.by_buyer
  end
end
