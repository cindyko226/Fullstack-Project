json.extract! @review, :id, :spot_id, :author_id, :body , :rating

json.author @review.author.username