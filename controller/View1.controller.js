sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
function (Controller,Filter,FilterOperator,Sorter) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
              
        },
        onValuePress: function () {
            if (!this._dialog) {
                this._dialog = sap.ui.xmlfragment(this.getView().getId(), "project1.view.EmpF4", this);
                this.getView().addDependent(this._dialog);  // Add the dialog as a dependent of the view
            }
            this._dialog.open();  // Open the dialog
        },
        onselectF4:function(oEvent){
               var empId=oEvent.getParameter("listItem").getBindingContext().getProperty("empId");
               this.getView().byId("idIpEmp").setValue(empId);
               this._dialog.close();
        },
        onClose:function(){
              this._dialog.close();
        },
        sortAsc:function(){
           var oSoeter=new Sorter("empName",false);
           this.getView().byId("idListEmp").getBinding("items").sort(oSoeter);
          // this.getView().byId("daneshlist").getBinding("items").sort(oSoeter);

        },
        sortdes:function(){
              var oSorter=new Sorter("empName",true);
              this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
             // this.getView().byId("daneshlist").getBinding("items").sort(oSorter);
        },
        onSearchEmp:function(oEvent){
                   var value=oEvent.getParameter("newValue");
                   var aFilters=[];
                   if(value !== ""){
                          var oFilter=new Filter("empName",FilterOperator.Contains,value);
                          aFilters.push(oFilter);
                   }
                  // this.getView().byId("daneshlist").getBinding("items").filter(aFilters);
                   this.getView().byId("idListEmp").getBinding("items").filter(aFilters);
        },
        onSelect:function(oEvent){
            var empId=oEvent.getParameter("listItem").getBindingContext().getPath();
            var index=empId.split("/")[2];
            this.getOwnerComponent().getRouter().navTo("RootView2",{
                Index:index 
              });

        },
        onSubmit:function(){
        //   var EmpId=this.getView().byId("empId").getValue();
        //   var EmpName=this.getView().byId("empName").getValue();
        //   var EmpEmail=this.getView().byId("empEmail").getValue();
        //   var EmpAddress=this.getView().byId("empAddress").getValue();
           
        //   this.getOwnerComponent().getModel().setProperty("/empId",EmpId);
        //   this.getOwnerComponent().getModel().setProperty("/empEmail",EmpEmail);
        //   this.getOwnerComponent().getModel().setProperty("/empName",EmpName);
        //   this.getOwnerComponent().getModel().setProperty("/empAddress",EmpAddress);
         
          this.getOwnerComponent().getRouter().navTo("RootView2");
          
   
           
        //   if(EmpId === ""){
        //     this.getView().byId("empId").setValueState("Error");
        //     this.getView().byId("empId").setValueStateText("Employee Id is Mandatory");
        //   }else{
        //     var EmpIDRegEx=/^[0-9]+$/;
        //     if(!EmpId.match(EmpIDRegEx) || EmpId.length !== 8 ){
        //         this.getView().byId("empId").setValueStateText("Employee Id Must Be 8 Digit");

        //     }else{
        //         this.getView().byId("empId").setValueState("None");
        //         this.getView().byId("empName").focus();
        //     }
        //   }
            
        }
    });
});
