.factory("getProductsSvc", ["$http", function($http){

	var getProductsSvc = {
		async: function() {
			var promise = $http.get("../data/products.json").then(function (response) {
				return response.data.products;
			});
			return promise;
		}
	};
	return getProductsSvc;

}])