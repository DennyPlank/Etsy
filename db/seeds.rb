# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Database Cleaner ---
require 'database_cleaner/active_record'
DatabaseCleaner.strategy = :truncation

require 'faker'
catagories = [
  'art',
  'sports',
  'food',
]

100.times do
  a = Seller.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )

  5.times do
    m_price = rand(50..1000);
    Buyer.create(
      name: Faker::Name.name,
      max_price: m_price,
      desired_catagories: catagories.sample,
      seller_id: a.id
    )
  end
  
  50.times do
    price = rand(50..1000)
    Product.create(
      name: Faker::Commerce.product_name,
      price: price,
      description: Faker::Quote.famous_last_words,
      category: catagories.sample,
      seller_id: a.id
  )
  end
end

puts '100 sellers, 50 buyers, 5000 products seed'