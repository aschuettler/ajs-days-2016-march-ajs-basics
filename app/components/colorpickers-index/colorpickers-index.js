'use strict'

angular.module('myApp.colorpickers-index', [])
  // <colorpickers-index></colorpickers-index>
  .component('colorpickersIndex', {
    // Ja, das geht. Sollte aber seperat dadrüber stehen.
    controller: function () {
      this.red = 255
      this.green = 0
      this.blue = 0
      this.alpha = 0.5
    },
    templateUrl: 'components/colorpickers-index/colorpickers-index.html'
  })
