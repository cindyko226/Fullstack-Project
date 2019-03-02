# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




ActiveRecord::Base.transaction do
  User.destroy_all
  Spot.destroy_all
  
  user1 = User.create!(username: "Cindy", password: "password")
  user2 = User.create!(username: "Liz", password: "password")
  user3 = User.create!(username: "Mocha", password: "password")
  user4 = User.create!(username: "Guest", password: "password")
  user5 = User.create!(username: "Dave", password: "password")

  spot1 = Spot.create!(
    host_id: user1.id,
    name: "Charming SF",
    address: '1911 Funston Ave',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.759870,
    lng: -122.480860,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "Private entry, sidewalk-level suite of living room, 
                  kitchen, bedroom and bath with artful touches in 1911 
                  Edwardian. Close to beaches,Park, groceries.",
    rate: 110,
    home_type: "PRIVATE ROOM"

  )

  spot2 = Spot.create!(
    host_id: user3.id,
    name: "Garden Retreat",
    address: '1126 Haight St',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.740330,
    lng: -122.413610,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "One bedroom sanctuary with a beautiful garden view and cozy fireplace.
                  Comes with it's own entrance just steps from bus lines, train and all 
                  that Haight Street has to offer.",
    rate: 250,
    home_type: "PRIVATE ROOM"

  )
  


end