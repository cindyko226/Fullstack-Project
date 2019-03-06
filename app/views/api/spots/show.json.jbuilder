json.extract! @spot, :id, :city, :state, :address, :lat, :lng, :name, :guests, 
:bedrooms, :beds, :bathrooms, :description, :rate, :host_id, :home_type


json.host @spot.host.username
json.hostPhotourl url_for(@spot.host.photo) if @spot.host.photo.attached?

# json.photoUrls spot.photos.map { |pic| url_for(pic) } if spot.photos.attached?