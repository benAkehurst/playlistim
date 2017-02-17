(function(){

	"use strict";

	var loginModule = angular.module('loginModule',[]);

	loginModule.controller("LoginController", function($scope, $http){

		$scope.makeName = function(){
			var a = "ben";
			return a;
		}

	});

})();