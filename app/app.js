'use strict'

angular.module('myApp', [
  // external Modules
  'ngRoute',
  // internal Modules
  'myApp.colorpicker',
  'myApp.colorpickers-index'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>It works</h1>'
      })
      .when('/sure', {
        template: '<h1>Yes, really!</h1>'
      })
      .when('/colorpickers', {
        template: '<colorpickers-index></colorpickers-index>'
      })
  })
