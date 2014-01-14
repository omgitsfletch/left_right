Ext.define("LeftRightApp.view.Header", {
	extend : "Ext.panel.Panel",
	alias : 'widget.header_bar',

	bodyStyle: { "background-color" : "#DDDDDD" },
	items: [
		{
			xtype: 'box',
			autoEl: {
				tag: 'img',
				src:'../assets/lr_logo.png',
				height: 95
			}
		}
	]
});