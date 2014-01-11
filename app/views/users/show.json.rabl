# Declare the data source
object @user

# Declare attributes to display
attributes :id, :first_name, :last_name, :occupation, :created_at, :updated_at

# Rather than crowd composite columns and presentation logic in the model, we can handle it here
node :full_name do |u|
	u.first_name + " " + u.last_name
end

# Instead of including a child role object and then having to deal with associations in the ExtJS frontend,
# we can simplify things for our needs by creating virtual attributes on the user to describe the associated role
glue :role do
	attributes :id => :role_id, :name => :role_name
end
