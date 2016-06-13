/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/gifts');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
          .state('app', {
              //url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.ng.html'),
              resolve: helper.resolveFor('modernizr', 'icons')
          })
          .state('app.gifts', {
              url: '/gifts',
              title: 'Single View',
              templateUrl: helper.basepath('gifts.ng.html')
          })
            .state('app.me', {
                url: '/me',
                title: 'Single View',
                templateUrl: helper.basepath('me.ng.html')
            })
            .state('app.balance', {
                url: '/balance',
                title: 'Single View',
                templateUrl: helper.basepath('balance.ng.html')
            })
            .state('app.terms', {
                url: '/terms',
                title: 'Single View',
                templateUrl: helper.basepath('terms.ng.html')
            })
            .state('app.vouchers', {
                url: '/vouchers',
                title: 'Single View',
                templateUrl: helper.basepath('voucher.ng.html')
            })
          .state('app.submenu', {
              url: '/submenu',
              title: 'Submenu',
              templateUrl: helper.basepath('submenu.ng.html')
          })
          // 
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // ----------------------------------- 
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

