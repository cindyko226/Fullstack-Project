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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
