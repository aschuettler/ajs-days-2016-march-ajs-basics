'use strict'

angular.module('myApp.colorpicker', [])
  .component('colorpicker', {
    bindings: {
      red: '@',
      green: '@',
      blue: '=',
      alpha: '='
    },
    templateUrl: 'components/colorpicker/colorpicker.html'
  })
