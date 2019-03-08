@reviews.each do |review|

  json.set! review.id do 
    json.extract! review, :id, :spot_id, :author_id, :body, :rating
    json.authorPhotourl url_for(review.author.photo) if review.author.photo.attached?
  end 
    json.author review.author.username
end 
