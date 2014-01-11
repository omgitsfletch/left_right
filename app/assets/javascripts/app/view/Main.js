Ext.define("LeftRightApp.view.Main", {
	extend : "Ext.tab.Panel",
	alias : 'widget.main',

	activeTab: 0,

	items: [
		{
			id: 'manage_users',
			layout: 'fit',
			title: 'Manage Users',
			closable: false,
			autoScroll: true,
			items: {
				xtype: 'gridpanel',
				store: Ext.create('LeftRightApp.store.User'),
				columns: [
					{text: "ID", width: 30, dataIndex: 'id', sortable: true},
					{text: "Fullname", flex: 1, dataIndex: 'full_name', sortable: true},
					{text: "Occupation", flex: 1, dataIndex: 'occupation', sortable: true},
					{text: "Role", flex: 1, dataIndex: 'role_name', sortable: true},
					{text: "Actions", width: 100,  sortable: false},
				]
			}
		},{
			id: 'manage_roles',
			layout: 'fit',
			title: 'Manage Roles',
			closable: false,
			autoScroll: true,
			items: {
				xtype: 'gridpanel',
				store: Ext.create('LeftRightApp.store.Role'),
				columns: [
					{text: "ID", width: 30, dataIndex: 'id', sortable: true},
					{text: "Name", flex: 1, dataIndex: 'name', sortable: true},
					{text: "Actions", width: 100, sortable: false},
				]
			}
		}
	]
});