# == Schema Information
#
# Table name: bookings
#
#  id           :bigint(8)        not null, primary key
#  spot_id      :integer          not null
#  guest_id     :integer          not null
#  guest_number :integer          not null
#  check_in     :date             not null
#  check_out    :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Booking < ApplicationRecord

    validates :guest_number, :check_in, :check_out, presence: true

    belongs_to :spot,
      primary_key: :id,
      foreign_key: :spot_id,
      class_name: :Spot
          
    
    belongs_to :user,
      primary_key: :id,
      foreign_key: :guest_id,
      class_name: :User

  
    

end
