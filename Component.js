/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "project1/model/models",
    "sap/ui/model/json/JSONModel" // Correct import path for JSONModel
],
function (UIComponent, Device, models,JSONModel) {
    "use strict";

    return UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Create the JSONModel and set the initial data
            
           
            var oData = {
                empId: "",
                empName: "",
                empEmail: "",
                empAddress: "",
                coutryname: [
                    { country: "India" },
                    { country: "Japan" },
                    { country: "Singapore" },
                    { country: "Deepak" },
                    { country: "Danesh" }
                ],
                aEmployees: [
                    {
                        empId: "12345",
                        empName: "Deepak",
                        empEmail: "naikdanesh2@gmail.com",
                        empAddress: "sdkjflksd"
                    },
                    {
                        empId: "123456",
                        empName: "Mahaveer",
                        empEmail: "naikdanesh2@gmail.com",
                        empAddress: "sdkjflksd"
                    },{
                        empId: "1234567",
                        empName: "Vikas",
                        empEmail: "naikdanesh2@gmail.com",
                        empAddress: "sdkjflksd"
                    },{
                        empId: "1234568",
                        empName: "Rani",
                        empEmail: "naikdanesh2@gmail.com",
                        empAddress: "sdkjflksd"
                    }
                    // More employee objects can be added here...
                ]
            };
            // Set the model to the component
            var oModel = new JSONModel(oData);
            this.setModel(oModel); 
             
            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });
}
);
