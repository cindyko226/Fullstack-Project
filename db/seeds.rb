# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'


ActiveRecord::Base.transaction do
  User.destroy_all
  Spot.destroy_all
  
  user1 = User.create!(username: "Cindy", password: "password")
  user2 = User.create!(username: "Liz", password: "password")
  user3 = User.create!(username: "Mocha", password: "password")
  user4 = User.create!(username: "Guest", password: "password")
  user5 = User.create!(username: "Dave", password: "password")

  # user1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user1.jpg"), filename: "user1.jpg")
  # user1.save!
  # user2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user2.jpg"), filename: "user2.jpg")
  # user2.save!
  # user3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user3.jpg"), filename: "user3.jpg")
  # user3.save!
  # user4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user4.png"), filename: "user4.png")
  # user4.save!
  # user5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user5.jpg"), filename: "user5.jpg")
  # user5.save!


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
  

  spot3 = Spot.create!(
    host_id: user2.id,
    name: "Great Pool",
    address: '548 S Los Angeles St',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.044916, 
    lng: -118.248494,
    guests: 4,
    bedrooms: 3,
    beds: 3,
    bathrooms: 4,
    description: "Welcome to our gorgeous house! Centrally located in historic 
                  Hancock Park, we just minutes away from Hollywood Attractions, 
                  Museums & Galleries, The Grove Shopping center/restaurants, 
                  Universal Studio, Downtown LA! Our place is ideal for 4 guests",
    rate: 350,
    home_type: "ENTIRE GUEST SUITE"

  )


  spot4 = Spot.create!(
    host_id: user2.id,
    name: "The Cheer",
    address: '5405029007',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.065956, 
    lng: -118.250539,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to Los Angeles! ",
    rate: 100,
    home_type: "ENTIRE GUEST SUITE"

  )



  spot5 = Spot.create!(
    host_id: user3.id,
    name: "The Beach",
    address: '501 21st St',
    city: 'San Diego',
    state: 'CA',
    lat: 32.711297, 
    lng: -117.144845,
    guests: 2,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to Los Angeles!",
    rate: 70,
    home_type: "ENTIRE GUEST SUITE"

  )


  spot6 = Spot.create!(
    host_id: user3.id,
    name: "The Deluxe",
    address: '5354320200',
    city: 'San Diego',
    state: 'CA',
    lat: 32.710159, 
    lng: -117.144609,
    guests: 4,
    bedrooms: 4,
    beds: 4,
    bathrooms: 5,
    description: "350 sq ft JUST RENOVATED large room in stunning Mediterranean-style 
                  estate nestled in a secure, quiet canyon in Mission Hills. Includes 
                  private bathroom with large shower.",
    rate: 170,
    home_type: "ENTIRE GUEST SUITE"
  )



  spot7 = Spot.create!(
    host_id: user4.id,
    name: "The Willow ",
    address: '24940040',
    city: 'San Jose',
    state: 'CA',
    lat: 37.346624, 
    lng: -121.894283,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

   spot8 = Spot.create!(
    host_id: user5.id,
    name: "The Modern",
    address: '24938020',
    city: 'San Jose',
    state: 'CA',
    lat: 37.347767, 
    lng: -121.892727,
    guests: 4,
    bedrooms: 4,
    beds: 4,
    bathrooms: 5,
    description: "Nice quiet location. Bright, tranquil, and comfortable unit 
                  in a private house with a separate entrance and private yard. 
                  Unit consists of one bedroom, one bathroom, 
                  and a kitchen and living area. ",
    rate: 110,
    home_type: "ENTIRE GUEST SUITE"
  )





end