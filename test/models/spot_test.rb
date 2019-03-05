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
#  home_type   :string           not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
