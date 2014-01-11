class CreateUsers < ActiveRecord::Migration

	def change
		create_table :users do |t|
			t.references :role, index: true

			t.string :first_name
			t.string :last_name
			t.string :occupation

			t.timestamps
		end
	end

end