class Api::SellersController < ApplicationController
  def index
  render Json: Seller.all
  end
end
