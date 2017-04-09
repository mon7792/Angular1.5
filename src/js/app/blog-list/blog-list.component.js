'use strict';
// sample component syntax
// component('nameofcomponent', {
//   template:
//   controller: function($scope){}
// });
 angular.module('blogList').
      component('blogList', {
          templateUrl: '/templates/blog-list.html',
          controller: function(Post, $routeParams, $scope){
            $scope.items = Post.query();
            }
      });
