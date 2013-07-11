class ContactMailer < ActionMailer::Base
   default :from => "Global Catalyst Inquiry"

  def contact_email(contact)
  	@contact_from = contact
  	mail(:to => "info@globalcatalysts.com.mx", :subject => "New Global Catalyst Contact")
  end
end
