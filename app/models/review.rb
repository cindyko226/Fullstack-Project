# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  spot_id    :integer          not null
#  rating     :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

    validates :rating, :body, presence: true
    
    belongs_to :spot,
      primary_key: :id,
      foreign_key: :spot_id,
      class_name: :Spot
    
    belongs_to :user,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User

end
