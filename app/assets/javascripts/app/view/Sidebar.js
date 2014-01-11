Ext.define("LeftRightApp.view.Sidebar", {
	extend : "Ext.form.Panel",
	alias : 'widget.sidebar',

	items: {
		xtype: 'treepanel',
		store: Ext.create('LeftRightApp.store.Menu'),
		lines: false,
		rootVisible: false,

		listeners: {
			itemclick: function(view, record, item, index, e ) {
				// Don't take any action on category nodes, only bottom-level nodes
				if (record.childNodes.length > 0)
					return;

				var action = record.raw.action,
					type = record.parentNode.raw.type;

				// The manage items should switch to that tab. The add items should open
				// modals to create new records for that type.
			    if (action == 'manage') {
			    	this.up('vp').down('main').setActiveTab('manage_' + type);
			    } else if (action == 'add') {
			    	Ext.Msg.alert('TEST', 'Load form dialog box for adding to ' + type);
			    }
			}
		}
	}
});