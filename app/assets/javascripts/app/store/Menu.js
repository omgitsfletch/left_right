Ext.define('LeftRightApp.store.Menu', {
	extend: 'Ext.data.TreeStore',
	root: {
		expanded: true,
		children: [
			{
				text: 'Users',
				type: 'users',
				expanded: true,
				children: [
					{
						leaf:true,
						action: 'manage',
						text: 'Manage Users'
					},{
						leaf:true,
						action: 'add',
						text: 'Add User'
					}
				]
			},{
				text: 'Roles',
				type: 'roles',
				expanded: true,
				children: [
					{
						leaf:true,
						action: 'manage',
						text: 'Manage Roles'
					},{
						leaf:true,
						action: 'add',
						text: 'Add Role'
					}
				]
			}
		]
	}
});