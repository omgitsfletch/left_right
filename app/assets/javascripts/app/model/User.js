Ext.define('LeftRightApp.model.User',{
	extend: 'Ext.data.Model',
	fields: [
		'id',
		'first_name',
		'last_name',
		'full_name',
		'occupation',
		'role_id',
		'role_name',
		'created_at',
		'updated_at'
	]
});