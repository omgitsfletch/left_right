class Role < ActiveRecord::Base
	# Uniqueness is enforced on a DB level, but also use a validator to make the error more user friendly
	validates :name, uniqueness: { case_sensitive: false }
end