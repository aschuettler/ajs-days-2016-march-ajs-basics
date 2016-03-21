'use strict'

angular.module('myApp.colorpickers-index', [
  'myApp.colors-api'
])
  // <colorpickers-index></colorpickers-index>
  .component('colorpickersIndex', {
    // Ja, das geht. Sollte aber seperat dadrüber stehen.
    controller: function (colorsApi) {
      colorsApi.loadColors()
        .then(function (colors) {
          angular.extend(this, colors)
        }.bind(this))
    },
    templateUrl: 'components/colorpickers-index/colorpickers-index.html'
  })
