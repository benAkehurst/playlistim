(function(){

	"use strict";

	var appModule = angular.module("appModule",["ngRoute",
												"loginModule"
												]);

	appModule.config(function($routeProvider){
		
		$routeProvider.when("/login",{
			controller:"LoginController",
			templateUrl:"app/components/homepage/loginMain.html"
		});


		// if an unknow route is typed by the user then they are automatically directed to the login page
		$routeProvider.otherwise({
			redirectTo:"/login"
		});


		
	});

})();