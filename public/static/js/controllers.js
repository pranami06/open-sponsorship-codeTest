// angular module declaration
var athleteControllers = angular.module('athleteControllers',[]);

athleteModule.controller('athleteFormController', 
    function($scope, $http, $state){
           
        // requested sports Data from the server
        $http.get('/sportsList').success(function(response){
            $scope.sportsList = response;
            console.log($scope.sportsList);
        });
        $scope.selectedSport =[];
        $scope.athlete = {};
        $scope.athlete =   {"name":"Pranami Jhawar","dob":"06/13/2018","gender":"Female","nationality":"United States","selectedSport":["Tennis","Basketball","American Football"],"location":"Radio City Music Hall","team":"New York Giants","isMarried":"No","association":"NBA","about":"I am awesome!","interests":"Reading, Singing","charities":"Americal Society","pets":"Kitty","ifDrinks":"Yes","facebook":"pranami@facebook.com","twitter":"@pranami","instagram":"@pranami"}
        
        // function to save data
        $scope.addAthlete = function(){
            console.log($scope.athlete);
            $http.post('/athlete', $scope.athlete).success(function(response){
                $state.go('list');
            });
    };
});