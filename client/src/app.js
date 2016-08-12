import angular from 'angular';
angular.module('music-chamber', [])
.controller('sheetsController', function() {
  this.sheets = ["Sheet one", "Sheet two"]
})
