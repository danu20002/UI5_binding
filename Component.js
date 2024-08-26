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
                    },
                    {
                        "empId": "123451",
                        "empName": "John",
                        "empEmail": "employee1@example.com",
                        "empAddress": "Address1"
                      },
                      {
                        "empId": "123452",
                        "empName": "Alice",
                        "empEmail": "employee2@example.com",
                        "empAddress": "Address2"
                      },
                      {
                        "empId": "123453",
                        "empName": "Robert",
                        "empEmail": "employee3@example.com",
                        "empAddress": "Address3"
                      },
                      {
                        "empId": "123454",
                        "empName": "Sophia",
                        "empEmail": "employee4@example.com",
                        "empAddress": "Address4"
                      },
                      {
                        "empId": "123455",
                        "empName": "Michael",
                        "empEmail": "employee5@example.com",
                        "empAddress": "Address5"
                      },
                      {
                        "empId": "123456",
                        "empName": "Emma",
                        "empEmail": "employee6@example.com",
                        "empAddress": "Address6"
                      },
                      {
                        "empId": "123457",
                        "empName": "David",
                        "empEmail": "employee7@example.com",
                        "empAddress": "Address7"
                      },
                      {
                        "empId": "123458",
                        "empName": "Olivia",
                        "empEmail": "employee8@example.com",
                        "empAddress": "Address8"
                      },
                      {
                        "empId": "123459",
                        "empName": "James",
                        "empEmail": "employee9@example.com",
                        "empAddress": "Address9"
                      },
                      {
                        "empId": "1234510",
                        "empName": "Liam",
                        "empEmail": "employee10@example.com",
                        "empAddress": "Address10"
                      },
                      {
                        "empId": "1234511",
                        "empName": "Emily",
                        "empEmail": "employee11@example.com",
                        "empAddress": "Address11"
                      },
                      {
                        "empId": "1234512",
                        "empName": "Daniel",
                        "empEmail": "employee12@example.com",
                        "empAddress": "Address12"
                      },
                      {
                        "empId": "1234513",
                        "empName": "Ava",
                        "empEmail": "employee13@example.com",
                        "empAddress": "Address13"
                      },
                      {
                        "empId": "1234514",
                        "empName": "Matthew",
                        "empEmail": "employee14@example.com",
                        "empAddress": "Address14"
                      },
                      {
                        "empId": "1234515",
                        "empName": "Mia",
                        "empEmail": "employee15@example.com",
                        "empAddress": "Address15"
                      },
                      {
                        "empId": "1234516",
                        "empName": "William",
                        "empEmail": "employee16@example.com",
                        "empAddress": "Address16"
                      },
                      {
                        "empId": "1234517",
                        "empName": "Isabella",
                        "empEmail": "employee17@example.com",
                        "empAddress": "Address17"
                      },
                      {
                        "empId": "1234518",
                        "empName": "Joseph",
                        "empEmail": "employee18@example.com",
                        "empAddress": "Address18"
                      },
                      {
                        "empId": "1234519",
                        "empName": "Charlotte",
                        "empEmail": "employee19@example.com",
                        "empAddress": "Address19"
                      },
                      {
                        "empId": "1234520",
                        "empName": "Joshua",
                        "empEmail": "employee20@example.com",
                        "empAddress": "Address20"
                      },
                      {
                        "empId": "1234521",
                        "empName": "Amelia",
                        "empEmail": "employee21@example.com",
                        "empAddress": "Address21"
                      },
                      {
                        "empId": "1234522",
                        "empName": "Ethan",
                        "empEmail": "employee22@example.com",
                        "empAddress": "Address22"
                      },
                      {
                        "empId": "1234523",
                        "empName": "Harper",
                        "empEmail": "employee23@example.com",
                        "empAddress": "Address23"
                      },
                      {
                        "empId": "1234524",
                        "empName": "Alexander",
                        "empEmail": "employee24@example.com",
                        "empAddress": "Address24"
                      },
                      {
                        "empId": "1234525",
                        "empName": "Evelyn",
                        "empEmail": "employee25@example.com",
                        "empAddress": "Address25"
                      },
                      {
                        "empId": "1234526",
                        "empName": "Benjamin",
                        "empEmail": "employee26@example.com",
                        "empAddress": "Address26"
                      },
                      {
                        "empId": "1234527",
                        "empName": "Abigail",
                        "empEmail": "employee27@example.com",
                        "empAddress": "Address27"
                      },
                      {
                        "empId": "1234528",
                        "empName": "Lucas",
                        "empEmail": "employee28@example.com",
                        "empAddress": "Address28"
                      },
                      {
                        "empId": "1234529",
                        "empName": "Sofia",
                        "empEmail": "employee29@example.com",
                        "empAddress": "Address29"
                      },
                      {
                        "empId": "1234530",
                        "empName": "Henry",
                        "empEmail": "employee30@example.com",
                        "empAddress": "Address30"
                      },
                      {
                        "empId": "1234531",
                        "empName": "Scarlett",
                        "empEmail": "employee31@example.com",
                        "empAddress": "Address31"
                      },
                      {
                        "empId": "1234532",
                        "empName": "Mason",
                        "empEmail": "employee32@example.com",
                        "empAddress": "Address32"
                      },
                      {
                        "empId": "1234533",
                        "empName": "Grace",
                        "empEmail": "employee33@example.com",
                        "empAddress": "Address33"
                      },
                      {
                        "empId": "1234534",
                        "empName": "Logan",
                        "empEmail": "employee34@example.com",
                        "empAddress": "Address34"
                      },
                      {
                        "empId": "1234535",
                        "empName": "Lily",
                        "empEmail": "employee35@example.com",
                        "empAddress": "Address35"
                      },
                      {
                        "empId": "1234536",
                        "empName": "Jacob",
                        "empEmail": "employee36@example.com",
                        "empAddress": "Address36"
                      },
                      {
                        "empId": "1234537",
                        "empName": "Ellie",
                        "empEmail": "employee37@example.com",
                        "empAddress": "Address37"
                      },
                      {
                        "empId": "1234538",
                        "empName": "Sebastian",
                        "empEmail": "employee38@example.com",
                        "empAddress": "Address38"
                      },
                      {
                        "empId": "1234539",
                        "empName": "Zoey",
                        "empEmail": "employee39@example.com",
                        "empAddress": "Address39"
                      },
                      {
                        "empId": "1234540",
                        "empName": "Aiden",
                        "empEmail": "employee40@example.com",
                        "empAddress": "Address40"
                      },
                      {
                        "empId": "1234541",
                        "empName": "Mila",
                        "empEmail": "employee41@example.com",
                        "empAddress": "Address41"
                      },
                      {
                        "empId": "1234542",
                        "empName": "Jack",
                        "empEmail": "employee42@example.com",
                        "empAddress": "Address42"
                      },
                      {
                        "empId": "1234543",
                        "empName": "Penelope",
                        "empEmail": "employee43@example.com",
                        "empAddress": "Address43"
                      },
                      {
                        "empId": "1234544",
                        "empName": "Owen",
                        "empEmail": "employee44@example.com",
                        "empAddress": "Address44"
                      },
                      {
                        "empId": "1234545",
                        "empName": "Aria",
                        "empEmail": "employee45@example.com",
                        "empAddress": "Address45"
                      },
                      {
                        "empId": "1234546",
                        "empName": "Elijah",
                        "empEmail": "employee46@example.com",
                        "empAddress": "Address46"
                      },
                      {
                        "empId": "1234547",
                        "empName": "Chloe",
                        "empEmail": "employee47@example.com",
                        "empAddress": "Address47"
                      }
                
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
