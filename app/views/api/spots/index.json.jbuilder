@spots.each do |spot|
  json.set! spots.id do 
    json.extract! spot, :id, :city, :lat, :lng, :guests, :rate
  end 
end 