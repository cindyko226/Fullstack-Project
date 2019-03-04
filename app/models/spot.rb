# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  state       :string           not null
#  city        :string           not null
#  address     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  name        :string           not null
#  guests      :integer          not null
#  bedrooms    :integer          not null
#  beds        :integer          not null
#  bathrooms   :integer          not null
#  description :text             not null
#  rate        :integer          not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord

    validates :state, :city, :lat, :lng, :name, :guests, :bedrooms, :beds, :bathrooms, :description, :rate,  presence: true
    validates :address, presence: true, uniqueness: true

    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User 

    def in_bounds(bounds)
    bounds = bounds.values
    if self.lat.between?(bounds[1]['lat'].to_f, bounds[0]['lat'].to_f) && self.lng.between?(bounds[1]['lng'].to_f, bounds[0]['lng'].to_f)
      return true
    end

    return false
    end


end
