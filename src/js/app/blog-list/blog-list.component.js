'use strict';
 angular.module('blogList').
      controller('blogListController', function($scope){
        $scope.title = 'Welcome to Controller'
        $scope.clicks = 0
        $scope.someClickTest = function(){
            console.log("Clicked")
            $scope.clicks += 1
            $scope.title = 'Clicked ' + $scope.clicks + ' times'
        }

      });
