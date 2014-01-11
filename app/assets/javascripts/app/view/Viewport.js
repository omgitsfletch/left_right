Ext.define("LeftRightApp.view.Viewport" , {
	extend: "Ext.container.Viewport",
	alias: 	'widget.vp',

	layout: { type: 'border' },

	items: [
		{
			region: 'north',
			xtype: 'header_bar',
			height: 50
		},{
			region: 'west',
			xtype: 'sidebar',
			layout: 'fit',
			width: 200,
			margins: '0 0 5 5',

			title: 'Data Management',

			split: true,
			collapsible: true,
			animCollapse: true
		},{
			region: 'center',
			xtype:  'main',
			margins: '0 5 5 0'
		}
	]

});