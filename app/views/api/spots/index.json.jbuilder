@spots.each do |spot|
  json.set! spot.id do 
    json.extract! spot, :id, :city, :lat, :lng, :guests, :rate, :name, :home_type, :state, :host_id, :beds
    json.photoUrls spot.photos.map { |pic| url_for(pic) } if spot.photos.attached?
  end 
end 
