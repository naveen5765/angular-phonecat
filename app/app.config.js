"use strict";

angular.module("phonecatApp").config([
  "$routeProvider",
  "$locationProvider",
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>",
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>",
      })
      .otherwise("/phones");

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
  },
]);
