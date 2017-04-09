'use strict';

 angular.module('blogDetail').
      component('blogDetail', {
          templateUrl: '/templates/blog-detail.html',
          controller: function(Post, $http, $location, $routeParams, $scope){
            Post.query(function(data){
              $scope.notFound = true
              angular.forEach(data, function(post){
                if(post.id == $routeParams.id){
                  $scope.notFound = false
                  $scope.post = post
                }
              })

            })
            if($scope.notFound){
              console.log("NotFound")
              // change location
              $location.path("/404")
            }
            }
      });
