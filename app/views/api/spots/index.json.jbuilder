@spots.each do |spot|
  json.set! spot.id do 
    json.extract! spot, :id, :city, :lat, :lng, :guests, :rate, :name, :home_type, :state, :host_id, :beds
  end 
end 