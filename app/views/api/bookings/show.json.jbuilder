json.extract! @booking, :id, :spot_id, :guest_id, :guest_number, :check_in, :check_out

# debugger
json.guest @booking.user.username
# json.photoUrls booking.spot.photos.map { |pic| url_for(pic) } if booking.spot.photos.attached?


# json.photoUrls @booking.spot.photos.map { |pic| url_for(pic) } if @booking.spot.photos.attached?