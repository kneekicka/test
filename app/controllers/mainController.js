.controller("mainCtrl", ["$scope", "$rootScope", "$cookies", "$state", function($scope, $rootScope, $cookies, $state){

	$rootScope.showLogoutBtn = $cookies.get("admin");
	$scope.logout = function(){
		$cookies.remove("admin");
		$rootScope.showLogoutBtn = false;
    	$state.go("login");
	};

}])