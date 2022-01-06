class Product < ApplicationRecord
  belongs_to :seller


  # SELECT products.name AS product_name, price, description, sellers.name AS seller_name FROM products
  # JOIN sellers
  # ON products.seller_id = sellers.id;
  def self.index
    select('products.name AS product_name, price, description, sellers.name AS seller_name')
    .joins('JOIN sellers ON products.seller_id = sellers.id')
  end


  # Groups data by category
  def self.by_category
  select('products.name AS product_name, price, description, category, sellers.name AS seller_name')
  .joins('JOIN sellers ON products.seller_id = sellers.id')
  .order('category, seller_name')
  end
end
