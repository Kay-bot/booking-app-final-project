# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_11_045704) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "account_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.string "status"
    t.string "title"
    t.integer "cost"
    t.string "date"
    t.text "cancellation_reason"
    t.boolean "refunded"
    t.string "client_id"
    t.integer "trainer_id"
    t.integer "schedule_id"
    t.integer "lesson_id"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_bookings_on_account_id"
    t.index ["lesson_id"], name: "index_bookings_on_lesson_id"
    t.index ["schedule_id"], name: "index_bookings_on_schedule_id"
    t.index ["trainer_id"], name: "index_bookings_on_trainer_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "photo"
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.integer "user_id"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_clients_on_account_id"
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "lesson_payments", force: :cascade do |t|
    t.string "payment_number"
    t.string "status"
    t.date "date"
    t.integer "cost"
    t.string "service"
    t.integer "booking_id"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_lesson_payments_on_account_id"
    t.index ["booking_id"], name: "index_lesson_payments_on_booking_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.string "url"
    t.string "title"
    t.string "duration"
    t.integer "cost"
    t.string "category"
    t.string "language"
    t.string "level"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schedules", force: :cascade do |t|
    t.string "title"
    t.string "date"
    t.string "time"
    t.integer "trainer_id"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "lesson_id"
    t.index ["account_id"], name: "index_schedules_on_account_id"
    t.index ["trainer_id"], name: "index_schedules_on_trainer_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "photo"
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.text "bio"
    t.string "experience"
    t.integer "user_id"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_trainers_on_account_id"
    t.index ["user_id"], name: "index_trainers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
