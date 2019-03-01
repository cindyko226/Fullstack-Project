# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




ActiveRecord::Base.transaction do
  User.destroy_all

  
  user1 = User.create!(username: "Cindy", password: "password")
  user2 = User.create!(username: "Liz", password: "password")
  user3 = User.create!(username: "Mocha", password: "password")
  user4 = User.create!(username: "Guest", password: "password")
  user5 = User.create!(username: "Dave", password: "password")


  


end