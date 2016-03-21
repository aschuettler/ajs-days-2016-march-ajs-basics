'use strict'

function colorpicker (colorsApi) {
  colorsApi.loadColors()
    .then(function (colors) {
      this.red = this.red || colors.red
      this.green = this.green || colors.green
      this.blue = this.blue || colors.blue
      this.alpha = this.alpha || colors.alpha
    }.bind(this))
}

angular.module('myApp.colorpicker', [
  'myApp.colors-api'
])
  .component('colorpicker', {
    bindings: {
      red: '@',
      green: '@',
      blue: '=',
      alpha: '='
    },
    controller: colorpicker,
    templateUrl: 'components/colorpicker/colorpicker.html'
  })
