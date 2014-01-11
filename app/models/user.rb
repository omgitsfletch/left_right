class User < ActiveRecord::Base
	# Each user has a specific role type
	belongs_to :role

	# Validation of fields on user creation
	validates :first_name, :presence => true
	validates :last_name, :presence => true
	validates :occupation, :presence => true
	validates :role, :presence => true

	# Define scope to grab all users of a specified role
	scope :with_role, ->(role_name) {
		joins(:role).
		where(:roles => { :name => role_name })
	}
end