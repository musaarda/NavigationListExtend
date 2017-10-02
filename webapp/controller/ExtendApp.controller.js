sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'jquery.sap.global',
	"sap/demo/controls/XNavigationListItem"
], function(Controller, jQuery, XNavigationListItem) {
	"use strict";

	return Controller.extend("sap.demo.controller.ExtendApp", {
		
		onInit: function () {

		},
		
		onCollapseExpandPress: function () {
			var oNavigationList = this.getView().byId('navigationList');
			var bExpanded = oNavigationList.getExpanded();

			oNavigationList.setExpanded(!bExpanded);
		}
		
	});
});