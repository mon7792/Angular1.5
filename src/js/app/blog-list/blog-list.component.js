'use strict';
// sample component syntax
// component('nameofcomponent', {
//   template:
//   controller: function($scope){}
// });
 angular.module('blogList').
      component('blogList', {
          templateUrl: '/templates/blog-list.html',
          controller: function(Post, $location, $routeParams, $rootScope, $scope){
            $scope.items = Post.query();
            $scope.goToItem = function(post){
              // console.log("some time");

              $rootScope.$apply(function(){
                $location.path("/blog/" + post.id)
              })
            }
            }
      });
