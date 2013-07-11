class Contact < ActiveRecord::Base
	attr_accessible :first_name, :last_name, :company, :phone, :email, :message
end