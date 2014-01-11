Ext.define('LeftRightApp.store.User', {
	extend: 'Ext.data.Store',
	model: 'LeftRightApp.model.User',

	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'users.json',
		reader: {
			type: 'json',
			record: 'user',
			idProperty: 'id'
		}
	}
});