'use strict'

angular.module('myApp.colors-api', [])
  .factory('colorsApi', function ($http) {
    return {
      loadColors: function () {
        return $http.get('colors.json')
          .then(function (response) {
            console.log(response)
            return response.data
          })
      }
    }
  })
