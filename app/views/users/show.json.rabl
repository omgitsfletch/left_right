# Declare the data source
object @user

# Declare attributes to display
attributes :id, :first_name, :last_name, :occupation, :created_at, :updated_at

# Include user as child node, reusing the User 'show' template
child :role do
  attributes :id, :name
end