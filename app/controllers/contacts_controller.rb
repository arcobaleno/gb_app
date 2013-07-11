class ContactsController < ApplicationController

	def index
		@contacts = Contact.paginate(:page => params[:page], :order => 'created_at desc')
	end

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(params[:contact])

		if @contact.save
			ContactMailer.contact_email(@contact).deliver
			flash[:success] = "Message Submitted"
			redirect_to root_path
		else
			flash[:error] = "Message Not Submitted"
			redirect_to root_path
		end
	end

	def show
		@contact = Contact.find(params[:id])
	end

	def destroy
		Contact.find(params[:id]).destroy
		flash[:success] = "Contact Deleted"
		redirect_to contacts_path
	end

end