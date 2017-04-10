'use strict';
  angular.
     module('confirmClick').
         directive('confirmClick', function(){
           return {
             restrict: 'A',
             link: function(scope, element, attr){
               var msg = attr.confirmClick || "Are you sure?";
               var clickAction = attr.confirmedClick;
               element.bind('click', function(event){
                 event.stopImmediatePropagation();
                 event.preventDefault();

                 if ( window.confirm(msg) ){
                   console.log("COOL");
                  scope.$eval(clickAction)
                 }
                 else {
                   console.log("cancel")
                 }
               })
              //  console.log(scope)
              //  console.log(element)
              //  console.log(attr)
             }
           }
         })
