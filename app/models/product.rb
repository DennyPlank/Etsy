class Product < ApplicationRecord
  belongs_to :seller


  # Groups by Sellers
  def self.by_seller
    select('products.name AS product_name, price, description, sellers.name AS seller_name')
    .joins('JOIN sellers ON products.seller_id = sellers.id')
  end


  # Groups data by category
  def self.by_category
  select('products.name AS product_name, price, description, category, sellers.name AS seller_name')
  .joins('JOIN sellers ON products.seller_id = sellers.id')
  .order('category, seller_name')
  end

  def self.by_buyer
    # select('products.name AS product_name, price, description, category, sellers.name AS seller_name')
    # .joins('JOIN sellers ON products.seller_id = sellers.id')
    # .order('category, price')

    # This is not the best way to do this, just doing it to pracive loading 
    # screens since there is now 25K entries.
    select('products.name AS product_name, buyers.name AS buyer_name, price, category')
    .joins('INNER JOIN buyers ON products.seller_id = buyers.seller_id')
  end
end
