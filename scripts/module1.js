
var mapModule = angular.module("mapModule", []);

mapModule.controller("getMap", function($scope) {
      var uluru = {lat: -25.363, lng: 131.044};
      $scope.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

      $scope.marker = [];

});
