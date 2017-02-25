.controller("dashboardCtrl", ["$scope", "$rootScope", "$mdDialog", "getProductsSvc", function($scope, $rootScope, $mdDialog, getProductsSvc){
    
    $rootScope.showLogoutBtn = true;
	getProductsSvc.async().then(function(d) {
		$scope.products = d;
	});
	$scope.productInfo = function(i){
    	alert = $mdDialog.alert({
    		title: "Product information",
    		textContent: $scope.products[i].description,
    		clickOutsideToClose: true,
    		ok: "Close"
    	});
    	$mdDialog
    		.show(alert)
    		.finally(function() {
    		alert = undefined;
        });
	};
	$scope.addNewProduct = function(){
	    $mdDialog.show({
	        controller: "addProductCtrl",
  			templateUrl: "app/views/dialogs/add-product.html",
  			clickOutsideToClose: true,
  			locals: {
    			allProducts: $scope.products
 			}
	    })
	};

}])