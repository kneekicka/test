.controller("loginCtrl", ["$scope", "$state", "$cookies", function($scope, $state, $cookies){

	$scope.submit = function(){
		if($scope.login == "admin" && $scope.password == "admin"){
			// authenticationSvc.userAuthenticated = true;
			$cookies.put("admin", "true");
			$state.go("dashboard");
		}
	};

}])