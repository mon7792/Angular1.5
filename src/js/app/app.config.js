// Config is used to extend the app.module
'use strict';
// angular.module('<name of the app>',)
 angular.module('try').
    config(
      function(
        $locationProvider,
        $routeProvider
      ){
        $locationProvider.html5Mode({
          enabled: true
        })
        $routeProvider.
        when("/",{
          template: "<blog-list></blog-list>"
        }).
        when("/about",{
          templateUrl: "/templates/about.html"
        }).
        when("/blog/:id",{
            template: "<blog-list></blog-list>"
        }).
        // when("/blog/2",{
        //     template: "<blog-list></blog-list>"
        // }).
        otherwise({
          template: "Not Found"
        })
    });
