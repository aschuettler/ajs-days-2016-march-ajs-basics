'use strict'

angular.module('myApp', [
  // external Modules
  'ngRoute',
  // internal Modules
  'myApp.colorpicker',
  'myApp.colorpickers-index',
  'myApp.greeter-index'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<greeter-index></greeter-index>'
      })
      .when('/sure', {
        template: '<h1>Yes, really!</h1>'
      })
      .when('/colorpickers', {
        template: '<colorpickers-index></colorpickers-index>'
      })
  })
