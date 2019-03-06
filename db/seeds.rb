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
  
  user1 = User.create(username: "Cindy", password: "password")
  user2 = User.create(username: "Liz", password: "password")
  user3 = User.create(username: "Mocha", password: "password")
  user4 = User.create(username: "Guest", password: "password")
  user5 = User.create(username: "Dave", password: "password")

  user1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user1.jpg"), filename: "user1.jpg")
  user1.save!
  user2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user2.jpg"), filename: "user2.jpg")
  user2.save!
  user3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user3.jpg"), filename: "user3.jpg")
  user3.save!
  user4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user4.png"), filename: "user4.png")
  user4.save!
  user5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/USER/user5.jpg"), filename: "user5.jpg")
  user5.save!


  sf1 = Spot.create(
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

  sf2 = Spot.create(
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
  

  sf3 = Spot.create(
    host_id: user4.id,
    name: "Cozy Home",
    address: '1156 Good St',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.792098, 
    lng: -122.402889,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "Located in a well-maintained boutique building within 
                  walking distance to endless local amenities. One of the most popular neighborhoods in the country.",
    rate: 100,
    home_type: "ENTIRE GUEST SUITE"

  )

  sf4 = Spot.create(
    host_id: user3.id,
    name: "Perfect Location",
    address: '1292 Yo St',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.77200, 
    lng: -122.443689,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "Do you wish to stay in a comfy private room at the center of San Francisco? I would love to welcome you in my lovely home! 
                  If you want to experience San Francisco as a real local, then this is the accommodation you need.",
    rate: 110,
    home_type: "PRIVATE ROOM"

  )

  sf5 = Spot.create(
    host_id: user3.id,
    name: "Mocha's Place",
    address: '1126 Show St',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.744209, 
    lng: -122.499610,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "One bedroom sanctuary with a beautiful garden view and cozy fireplace.
                  Comes with it's own entrance just steps from bus lines, train and all 
                  that Haight Street has to offer.",
    rate: 230,
    home_type: "PRIVATE ROOM"

  )

  sf6 = Spot.create(
    host_id: user5.id,
    name: "Perfect Retreat",
    address: '1100 Hait St',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.775314, 
    lng: -122.444161,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "The guest apartment has its own entrance located on the ground level of our home.",
    rate: 250,
    home_type: "PRIVATE ROOM"

  )


  # sf spots photos attached

  sf1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf1-1.jpg"), filename: "sf1-1.jpg")
  sf1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf1-2.jpeg"), filename: "sf1-2.jpeg")
  sf1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf1-3.jpg"), filename: "sf1-3.jpg")
  sf1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf1-4.jpg"), filename: "sf1-4.jpg")
  sf1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf1-5.jpg"), filename: "sf1-5.jpg")
  sf1.save!

  sf2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf2-1.jpg"), filename: "sf2-1.jpg")
  sf2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf2-2.jpg"), filename: "sf2-2.jpg")
  sf2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf2-3.jpg"), filename: "sf2-3.jpg")
  sf2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf2-4.jpg"), filename: "sf2-4.jpg")
  sf2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf2-5.jpeg"), filename: "sf2-5.jpeg")
  sf2.save!

  sf3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf3-1.jpg"), filename: "sf3-1.jpg")
  sf3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf3-2.jpg"), filename: "sf3-2.jpg")
  sf3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf3-3.jpg"), filename: "sf3-3.jpg")
  sf3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf3-4.jpg"), filename: "sf3-4.jpg")
  sf3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf3-5.jpg"), filename: "sf3-5.jpg")
  sf3.save!

  sf4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf4-1.jpg"), filename: "sf4-1.jpg")
  sf4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf4-2.jpg"), filename: "sf4-2.jpg")
  sf4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf4-3.jpg"), filename: "sf4-3.jpg")
  sf4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf4-4.jpg"), filename: "sf4-4.jpg")
  sf4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf4-5.jpg"), filename: "sf4-5.jpg")
  sf4.save!

  sf5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf5-1.jpg"), filename: "sf5-1.jpg")
  sf5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf5-2.jpg"), filename: "sf5-2.jpg")
  sf5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf5-3.jpg"), filename: "sf5-3.jpg")
  sf5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf5-4.jpg"), filename: "sf5-4.jpg")
  sf5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf5-5.jpg"), filename: "sf5-5.jpg")
  sf5.save!

  sf6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf6-1.jpg"), filename: "sf6-1.jpg")
  sf6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf6-2.jpg"), filename: "sf6-2.jpg")
  sf6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf6-3.jpg"), filename: "sf6-3.jpg")
  sf6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf6-4.jpg"), filename: "sf6-4.jpg")
  sf6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SF/sf6-5.jpg"), filename: "sf6-5.jpg")
  sf6.save!



  la1 = Spot.create(
    host_id: user2.id,
    name: "Great Pool",
    address: '548 N Los Angeles St',
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


  la2 = Spot.create(
    host_id: user2.id,
    name: "The Cheer",
    address: '54 N Los Angeles St',
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



  la3 = Spot.create(
    host_id: user2.id,
    name: "The Bear",
    address: '548 W Los Angeles St',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.065955, 
    lng: -118.258568,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 2,
    description: "In the heart of downtown you are surrounded on all sides by five star 
                  restaurants, clubs, art galleries, and fashion stores. ",
    rate: 120,
    home_type: "ENTIRE GUEST SUITE"

  )


  la4 = Spot.create(
    host_id: user2.id,
    name: "Top of the Hill Acres",
    address: '548 N Los Annt St',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.067034, 
    lng: -118.248461,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 2,
    description: "Have a backyard barbecue and eat at a shaded picnic table after exploring on bikes.",
    rate: 190,
    home_type: "ENTIRE GUEST SUITE"

  )


  la5 = Spot.create(
    host_id: user2.id,
    name: "Bike Around Town",
    address: '548 N Los beds St',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.046312, 
    lng: -118.259682,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 2,
    description: "Rugged, beautiful landscape with picturesque mountain views and wide open cloudless blue skies.",
    rate: 105,
    home_type: "ENTIRE GUEST SUITE"

  )


  la6 = Spot.create(
    host_id: user4.id,
    name: "The Town",
    address: '5405029007',
    city: 'Los Angeles',
    state: 'CA',
    lat: 34.052833, 
    lng: -118.256738,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to Los Angeles! ",
    rate: 130,
    home_type: "ENTIRE GUEST SUITE"

  )

  # la spots photos attached
  la1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la1-1.jpeg"), filename: "la1-1.jpg")
  la1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la1-2.jpeg"), filename: "la1-2.jpg")
  la1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la1-3.jpeg"), filename: "la1-3.jpg")
  la1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la1-4.jpeg"), filename: "la1-4.jpg")
  la1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la1-5.jpeg"), filename: "la1-5.jpg")
  la1.save!

  la2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la2-1.jpeg"), filename: "la2-1.jpg")
  la2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la2-2.jpeg"), filename: "la2-2.jpg")
  la2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la2-3.jpeg"), filename: "la2-3.jpg")
  la2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la2-4.jpeg"), filename: "la2-4.jpg")
  la2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la2-5.jpeg"), filename: "la2-5.jpg")
  la2.save!

  la3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la3-1.jpeg"), filename: "la3-1.jpg")
  la3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la3-2.jpeg"), filename: "la3-2.jpg")
  la3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la3-3.jpeg"), filename: "la3-3.jpg")
  la3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la3-4.jpeg"), filename: "la3-4.jpg")
  la3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la3-5.jpeg"), filename: "la3-5.jpg")
  la3.save!

  la4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la4-1.jpeg"), filename: "la4-1.jpg")
  la4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la4-2.jpeg"), filename: "la4-2.jpg")
  la4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la4-3.jpeg"), filename: "la4-3.jpg")
  la4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la4-4.jpeg"), filename: "la4-4.jpg")
  la4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la4-5.jpeg"), filename: "la4-5.jpg")
  la4.save!

  la5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la5-1.jpeg"), filename: "la5-1.jpg")
  la5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la5-2.jpeg"), filename: "la5-2.jpg")
  la5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la5-3.jpeg"), filename: "la5-3.jpg")
  la5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la5-4.jpeg"), filename: "la5-4.jpg")
  la5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la5-5.jpeg"), filename: "la5-5.jpg")
  la5.save!

  la6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la6-1.jpeg"), filename: "la6-1.jpg")
  la6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la6-2.jpeg"), filename: "la6-2.jpg")
  la6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la6-3.jpeg"), filename: "la6-3.jpg")
  la6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la6-4.jpeg"), filename: "la6-4.jpg")
  la6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/LA/la6-5.jpeg"), filename: "la6-5.jpg")
  la6.save!


  sd1 = Spot.create(
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
                  the NoHouse, is ready for your visit to San Deigo!",
    rate: 70,
    home_type: "ENTIRE GUEST SUITE"

  )


  sd2 = Spot.create(
    host_id: user3.id,
    name: "The Deluxe",
    address: '225 st',
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


  sd3 = Spot.create(
    host_id: user3.id,
    name: "The Andaz",
    address: '701 22st St',
    city: 'San Diego',
    state: 'CA',
    lat: 32.713397, 
    lng: -117.167750,
    guests: 2,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to San Deigo!",
    rate: 270,
    home_type: "ENTIRE GUEST SUITE"

  )


  sd4 = Spot.create(
    host_id: user2.id,
    name: "The Brain's",
    address: '511 21st St',
    city: 'San Diego',
    state: 'CA',
    lat: 32.714489, 
    lng: -117.164740,
    guests: 2,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to San Deigo!",
    rate: 170,
    home_type: "ENTIRE GUEST SUITE"

  )

  sd5 = Spot.create(
    host_id: user3.id,
    name: "The Dono",
    address: '501 33st St',
    city: 'San Diego',
    state: 'CA',
    lat: 32.716333, 
    lng: -117.169399,
    guests: 2,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to San Deigo!",
    rate: 370,
    home_type: "ENTIRE GUEST SUITE"

  )


  sd6 = Spot.create(
    host_id: user3.id,
    name: "The Beach",
    address: '21 21st St',
    city: 'San Diego',
    state: 'CA',
    lat: 32.718147, 
    lng: -117.165534,
    guests: 2,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description: "Our darling, sunny, detached, private studio guest house, 
                  the NoHouse, is ready for your visit to San Deigo!",
    rate: 230,
    home_type: "ENTIRE GUEST SUITE"

  )


  # sd spots photos attached 

  sd1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd1-1.jpeg"), filename: "sd1-1.jpg")
  sd1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd1-2.jpeg"), filename: "sd1-2.jpg")
  sd1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd1-3.jpeg"), filename: "sd1-3.jpg")
  sd1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd1-4.jpeg"), filename: "sd1-4.jpg")
  sd1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd1-5.jpeg"), filename: "sd1-5.jpg")
  sd1.save!

  sd2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd2-1.jpg"), filename: "sd2-1.jpg")
  sd2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/s2-2.jpeg"), filename: "s2-2.jpeg")
  sd2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd2-3.jpeg"), filename: "sd2-3.jpeg")
  sd2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd2-4.jpeg"), filename: "sd2-4.jpeg")
  sd2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd2-5.jpeg"), filename: "sd2-5.jpeg")
  sd2.save!

  sd3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd3-1.jpeg"), filename: "sd3-1.jpeg")
  sd3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd3-2.jpeg"), filename: "sd3-2.jpeg")
  sd3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd3-3.jpeg"), filename: "sd3-3.jpeg")
  sd3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd3-4.jpeg"), filename: "sd3-4.jpeg")
  sd3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd3-5.jpeg"), filename: "sd3-5.jpeg")
  sd3.save!

  sd4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd4-1.jpeg"), filename: "sd4-1.jpeg")
  sd4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd4-2.jpeg"), filename: "sd4-2.jpeg")
  sd4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd4-3.jpeg"), filename: "sd4-3.jpeg")
  sd4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd4-4.jpeg"), filename: "sd4-4.jpeg")
  sd4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd4-5.jpeg"), filename: "sd4-5.jpeg")
  sd4.save!

  sd5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd5-1.jpeg"), filename: "sd5-1.jpeg")
  sd5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd5-2.jpeg"), filename: "sd5-2.jpeg")
  sd5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd5-3.jpeg"), filename: "sd5-3.jpeg")
  sd5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd5-4.jpeg"), filename: "sd5-4.jpeg")
  sd5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd5-5.jpeg"), filename: "sd5-5.jpeg")
  sd5.save!

  sd6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd6-1.jpeg"), filename: "sd6-1.jpeg")
  sd6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd6-2.jpeg"), filename: "sd6-2.jpeg")
  sd6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd6-3.jpeg"), filename: "sd6-3.jpeg")
  sd6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd6-4.jpeg"), filename: "sd6-4.jpeg")
  sd6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SD/sd6-5.jpeg"), filename: "sd6-5.jpeg")
  sd6.save!



  sj1 = Spot.create(
    host_id: user4.id,
    name: "The Willow ",
    address: '501 S 7th St,',
    city: 'San Jose',
    state: 'CA',
    lat: 37.336624, 
    lng: -121.894283,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

   sj2 = Spot.create(
    host_id: user5.id,
    name: "The Modern",
    address: '502 S 7th St,',
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

  sj3 = Spot.create(
    host_id: user4.id,
    name: "The Pi Cozy",
    address: '503 S 7th St,',
    city: 'San Jose',
    state: 'CA',
    lat: 37.330676, 
    lng: -121.877730,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

  sj4 = Spot.create(
    host_id: user4.id,
    name: "The Moon",
    address: '504 S 7th St',
    city: 'San Jose',
    state: 'CA',
    lat: 37.343670, 
    lng: -121.875026,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

  sj5 = Spot.create(
    host_id: user4.id,
    name: "The Twilight",
    address: '505 S 7th St',
    city: 'San Jose',
    state: 'CA',
    lat: 37.339302, 
    lng: -121.883853,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

  sj6 = Spot.create(
    host_id: user4.id,
    name: "De Anza",
    address: '506 S 7th St',
    city: 'San Jose',
    state: 'CA',
    lat: 37.344757, 
    lng: -121.885423,
    guests: 2,
    bedrooms: 2,
    beds: 2,
    bathrooms: 3,
    description: "Very quite neighborhood, 1/3 acre lot, near eBay & public transit",      
    rate: 200,
    home_type: "ENTIRE GUEST SUITE"
  )

  sj1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj1-1.jpeg"), filename: "sj1-1.jpeg")
  sj1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj1-2.jpeg"), filename: "sj1-2.jpeg")
  sj1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj1-3.jpeg"), filename: "sj1-3.jpeg")
  sj1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj1-4.jpeg"), filename: "sj1-4.jpeg")
  sj1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj1-5.jpeg"), filename: "sj1-5.jpeg")
  sj1.save!

  sj2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj2-1.jpeg"), filename: "sj2-1.jpeg")
  sj2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj2-2.jpeg"), filename: "sj2-2.jpeg")
  sj2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj2-3.jpeg"), filename: "sj2-3.jpeg")
  sj2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj2-4.jpeg"), filename: "sj2-4.jpeg")
  sj2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj2-5.jpeg"), filename: "sj2-5.jpeg")
  sj2.save!

  sj3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj3-1.jpeg"), filename: "sj3-1.jpeg")
  sj3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj3-2.jpeg"), filename: "sj3-2.jpeg")
  sj3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj3-3.jpeg"), filename: "sj3-3.jpeg")
  sj3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj3-4.jpg"), filename: "sj3-4.jpg")
  sj3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj3-5.jpeg"), filename: "sj3-5.jpeg")
  sj3.save!

  sj4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj4-1.jpeg"), filename: "sj4-1.jpeg")
  sj4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj4-2.jpeg"), filename: "sj4-2.jpeg")
  sj4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj4-3.jpeg"), filename: "sj4-3.jpeg")
  sj4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj4-4.jpeg"), filename: "sj4-4.jpeg")
  sj4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj4-5.jpeg"), filename: "sj4-5.jpeg")
  sj4.save!

  sj5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj5-1.jpeg"), filename: "sj5-1.jpeg")
  sj5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj5-2.jpeg"), filename: "sj5-2.jpeg")
  sj5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj5-3.jpeg"), filename: "sj5-3.jpeg")
  sj5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj5-4.jpeg"), filename: "sj5-4.jpeg")
  sj5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj5-5.jpeg"), filename: "sj5-5.jpeg")
  sj5.save!

  sj6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj6-1.jpeg"), filename: "sj6-1.jpeg")
  sj6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj6-2.jpeg"), filename: "sj6-2.jpeg")
  sj6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj6-3.jpeg"), filename: "sj6-3.jpeg")
  sj6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj6-4.jpeg"), filename: "sj6-4.jpeg")
  sj6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/takemehome-seed/SJ/sj6-5.jpeg"), filename: "sj6-5.jpeg")
  sj6.save!

end