'use strict';
// sample component syntax
// component('nameofcomponent', {
//   template:
//   controller: function($scope){}
// });
 angular.module('blogList').
      component('blogList', {
          // template: "<div class=''><h1>{{ title }}</h1><button type='button' name='button' ng-click='someClickTest()'>CLICK Me</button></div>",
          templateUrl: '/templates/blog-list.html',
          controller: function($scope){
            $scope.title = 'Welcome to Controller'
            $scope.clicks = 0
            $scope.someClickTest = function(){
                console.log("Clicked")
                $scope.clicks += 1
                $scope.title = 'Clicked ' + $scope.clicks + ' times'
                }
            }
      });
      // controller('blogListController', function($scope){
        // $scope.title = 'Welcome to Controller'
        // $scope.clicks = 0
        // $scope.someClickTest = function(){
        //     console.log("Clicked")
        //     $scope.clicks += 1
        //     $scope.title = 'Clicked ' + $scope.clicks + ' times'
      //   }
      //
      // });
