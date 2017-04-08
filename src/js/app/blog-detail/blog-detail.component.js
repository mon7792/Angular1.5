'use strict';

 angular.module('blogDetail').
      component('blogDetail', {
          templateUrl: '/templates/blog-detail.html',
          controller: function($http, $location, $routeParams, $scope){
            $http.get("/json/posts.json").then(successCallback, errorCallback);
            function successCallback(response, status, config, statusText){
              $scope.notFound = true
              var blogItems =  response.data
              $scope.posts = blogItems
              angular.forEach(blogItems, function(post){
                if(post.id == $routeParams.id){
                  $scope.notFound = false
                  $scope.post = post
                }
              })
            }
            function errorCallback(response, status, config, statusText){
              $scope.notFound = true
              console.log(response);
            }


            if($scope.notFound){
              console.log("NotFound")
              // change location
              $location.path("/404")
            }






            //
            // $scope.title = 'Blog ' + $routeParams.id
            // $scope.notFound = true
            // angular.forEach(blogItems, function(post){
            //   if(post.id == $routeParams.id){
            //     $scope.notFound = false
            //     $scope.post = post
            //   }
            // })
            //
            //
            // var blogItems = [
            //   {title: "Some Title", id: 1, description: "This is a book"},
            //   {title: "Title", id: 2, description: "This is a book"},
            //   {title: "Tea", id: 3, description: "This is a book"},
            //   {title: "Lite", id: 4, description: "This is a book"}
            // ]


            }
      });
