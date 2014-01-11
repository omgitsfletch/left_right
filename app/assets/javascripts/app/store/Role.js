Ext.define('LeftRightApp.store.Role', {
	extend: 'Ext.data.Store',
	model: 'LeftRightApp.model.Role',

	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'roles.json',
		reader: {
			type: 'json',
			record: 'role',
			idProperty: 'id'
		}
	}
});