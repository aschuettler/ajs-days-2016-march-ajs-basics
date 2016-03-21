'use strict'

angular.module('myApp.greeter-index', [])
  .component('greeterIndex', {
    controller: function () {
      this.name = 'AngularJS'
    },
    templateUrl: 'components/greeter-index/greeter-index.html'
  })
