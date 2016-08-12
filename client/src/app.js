import angular from 'angular';
angular.module('music-chamber', [])
.controller('sheetsController', function($http) {
  $http.get('/sheets').then((response) => {
    this.sheets = response.data;
  });
})
