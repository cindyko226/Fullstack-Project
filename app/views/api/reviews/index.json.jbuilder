@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :spot_id, :author_id, :body, :rating
  end 
end 
