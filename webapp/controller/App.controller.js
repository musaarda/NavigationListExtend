sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.demo.controller.App", {
		
		onInit: function () {

		},
		
		onCollapseExpandPress: function () {
			var oNavigationList = this.getView().byId('navigationList');
			var bExpanded = oNavigationList.getExpanded();

			oNavigationList.setExpanded(!bExpanded);
		}
		
	});
});