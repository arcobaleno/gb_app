class CreateContactTable < ActiveRecord::Migration
  def change
  	create_table "contacts", :force => true do |t|
  	t.string "first_name"
  	t.string "last_name"
  	t.string "company"
  	t.string "phone"
  	t.string "email"
  	t.text "message"
  	t.datetime "created_at"
    end
  end
end
