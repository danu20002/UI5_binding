sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.Second", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("RootView2").attachPatternMatched(this.onPatternMatched,this);

        },
        onPatternMatched: function(oEvent){
            var index=oEvent.getParameter("arguments").Index;
           this.getView().bindElement("/aEmployees/"+ index);
           
             
        }

    });
});
