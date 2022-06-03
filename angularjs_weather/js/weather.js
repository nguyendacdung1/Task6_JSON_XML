'use strict';

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope, $http){
    $http.get("https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=c5fa5112984ef1d54f8eb90a645bba36&units=metric")
        .success(function (data){
            console.log(data)
            if (data){

                $scope.current = data.main.temp;
                $scope.temp_min = data.main.temp_min;
                $scope.temp_max = data.main.temp_max;
                $scope.wind_speed = data.wind_speed;
                $scope.clouds = data.clouds ? data.clouds.all : undefined;
                $scope.icon = data.weather[0].icon
                $scope.img_url = `http://openweathermap.org/img/wn/${$scope.icon}@2x.png`
            }
        })
        .error(function (data, status){
            console.log(data);
        });
});