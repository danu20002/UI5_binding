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
        onSearchEmp:function(oEvent){
                   var value=oEvent.getParameter("newValue");
                   var aFilters=[];
                   if(value !== ""){
                          var oFilter=new Filter("empName",FilterOperator.Contains,value);
                          aFilters.push(oFilter);
                   }
                   this.getView().byId("daneshlist").getBinding("items").filter(aFilters);
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
