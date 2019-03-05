# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_05_015803) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "guest_id", null: false
    t.integer "guest_number", null: false
    t.date "check_in", null: false
    t.date "check_out", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "state", null: false
    t.string "city", null: false
    t.string "address", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "name", null: false
    t.integer "guests", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.integer "bathrooms", null: false
    t.text "description", null: false
    t.integer "rate", null: false
    t.integer "host_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "home_type", null: false
    t.index ["city"], name: "index_spots_on_city"
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
