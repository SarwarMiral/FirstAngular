var thisApp = angular.module('restDemo', ['ngResource', 'ngGrid', 'ui.router']);

thisApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: "/",
        templateUrl:"index.html"
    })
    $stateProvider.state("home.settings", {
        url: "/settings",
        templateUrl: "Templates/settings.html"
    })
    $stateProvider.state("home.settings.grid", {
        url: "/settings.grid",
        templateUrl: "Templates/grid.html"
    })
});

thisApp.controller('restController', ['$scope', 'restService', function ($scope, restService) {
    $scope.persons = [];
    $scope.Get_Array = function () {
        restService.Get_Array('http://localhost:6681/api/person').then(function (response) {
            $scope.persons = response
            //console.log('this log');
            //console.log(response);
        });
    };
    $scope.selected = [];
    $scope.gridOps = {
        data: 'persons',
        showGroupPanel: true,
        selectedItems: $scope.selected,
        multiSelect: false
    }
    $scope.Get_IntString_Object = function () {

        restService.Get_IntString_Object('http://localhost:6681/api/person/:intgr/:str').then(function (response) {
            $scope.human = response;
            //console.log('this log');
            //console.log($scope.human);
        });
    };

    $scope.Post_Object = function () {
        restService.Post_Object('http://localhost:6681/api/person').then(function (response) {
            $scope.message = response;
            //console.log('$scope.message: ');
            //console.log($scope.message);
        });
    };

    $scope.Put_Id_Object = function () {
        restService.Put_Id_Object('http://localhost:6681/api/person/:id').then(function (response) {
            $scope.message = response;
            //console.log('$scope.message: ');
            //console.log($scope.message);
        });
    };

    $scope.Delete_Id = function () {
        restService.Delete_Id('http://localhost:6681/api/person/:id').then(function (response) {
            $scope.message = response;
            //console.log('$scope.message: ');
            //console.log($scope.message);
        });
    };
    $scope.name = 'Hello Brother !';
}]);