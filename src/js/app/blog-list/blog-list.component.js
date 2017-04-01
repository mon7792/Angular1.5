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
            var blogItems = [
              {title: "Some Title", id: 1, description: "This is a book"},
              {title: "Title", id: 2, description: "This is a book"},
              {title: "Tea", id: 3, description: "This is a book"},
              {title: "Lite", id: 4, description: "This is a book"},
            ]
            $scope.items = blogItems;
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
