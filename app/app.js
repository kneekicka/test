var testApp = angular.module("testApp", ["ngMaterial", "ui.router", "ngCookies"])

	.config(["$stateProvider", "$urlRouterProvider", 
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state("login", {
					url: "/",
					templateUrl: "index.html",
					authenticate: false,
					views: {
						"inner": {
							templateUrl: "app/views/login.html",
							controller: "loginCtrl",
      					}
    				}
		  		})
				.state("dashboard", {
					url: "/dashboard",
					templateUrl: "index.html",
					authenticate: true,
					views: {
						"inner": {
        					templateUrl: "app/views/dashboard.html",
        					controller: "dashboardCtrl",
      					}
    				}
		  		})
		}
		
	])

	.run(["$rootScope", "$state", "$cookies", function ($rootScope, $state, $cookies) {

		$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
			//if user isn't logged in don't show the dashboard 
			if (toState.authenticate && !$cookies.get("admin")){
	    		$state.transitionTo("dashboard", null, {notify:false});
	    		event.preventDefault();
	    		$state.go("login");
	    	};
	    	//if user is logged in redirect to dashboard from login
			if (!toState.authenticate && $cookies.get("admin")){
	    		$state.transitionTo("login", null, {notify:false});
	    		event.preventDefault();
	    		$state.go("dashboard");
	    	}
	  	});

	}])