// angular app's main module declaration
var athleteModule = angular.module('athleteModule', [
    'ui.router',
    'athleteControllers'
]);

//configuring routes
athleteModule.config( 
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl:  '../partial-views/welcome.html',
                controller: 'athleteFormController'
            })
            .state('navigation', {
                url: '/navigation',
                templateUrl: '../partial-views/navigation.html',
                controller: 'athleteFormController'
            })
            .state('navigation.basicInfo', {
                url: '/basicInfo',
                templateUrl: '../partial-views/basic-info.html'
                // controller: 'BasicInfoCtrl'
            })
            .state('navigation.about', {
                url: '/about',
                templateUrl: '../partial-views/about.html'
                // controller: 'BasicInfoCtrl'
            })
            .state('navigation.interests', {
                url: '/interests',
                templateUrl: '../partial-views/interests.html'
                // controller: 'BasicInfoCtrl'
            })
            .state('navigation.socialMedia', {
                url: '/socialMedia',
                templateUrl: '../partial-views/social-media.html'
                // controller: 'BasicInfoCtrl'
            })
            .state('navigation.summary', {
                url: '/summary',
                templateUrl: '../partial-views/summary.html',
                // controller: 'BasicInfoCtrl'
            })
            .state('list', {
                url: '/athleteList',
                templateUrl: '../partial-views/athlete-list.html',
                 controller: 'listController'
            });
        $urlRouterProvider.otherwise('/welcome/basicInfo');

    }
);




