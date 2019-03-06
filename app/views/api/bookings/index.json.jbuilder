@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :spot_id, :guest_id, :guest_number, :check_in, :check_out
   
  end
  

end 
