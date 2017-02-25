.controller("addProductCtrl", ["$scope", "$mdDialog", "allProducts",  function($scope, $mdDialog, allProducts){
	
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	$scope.addProduct = function(){
		allProducts.unshift($scope.product);
		$mdDialog.hide();
	};

}])