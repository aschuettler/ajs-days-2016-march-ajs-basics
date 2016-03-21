'use strict'

angular.module('myApp.colorpicker', [])
  .component('colorpicker', {
    bindings: {
      red: '@',
      green: '@',
      blue: '='
    },
    templateUrl: 'components/colorpicker/colorpicker.html'
  })
