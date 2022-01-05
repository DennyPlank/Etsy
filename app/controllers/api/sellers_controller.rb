class Api::SellersController < ApplicationController
  def index
  render Json: Sellers.all
  end
end
