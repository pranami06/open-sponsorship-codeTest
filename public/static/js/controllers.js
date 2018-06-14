// angular module declaration
var athleteControllers = angular.module('athleteControllers',[]);

// controller for Athlete List
athleteControllers.controller('listController',
    function($scope, $http, $stateParams){
        $http.get('/getAthleteList').success(function(response){
            console.log(response);
            $scope.athletesList = response;
        })

});

athleteModule.controller('athleteFormController', 
    function($scope, $http, $state){
           
        // requested sports Data from the server
        $http.get('/sportsList').success(function(response){
            $scope.sportsList = response;
            console.log($scope.sportsList);
        });
        $scope.selectedSport =[];
        $scope.athlete = {};
        
        // function to save data
        $scope.addAthlete = function(){
            console.log($scope.athlete);
            $http.post('/athlete', $scope.athlete).success(function(response){
                $state.go('list');
            });
    };
});