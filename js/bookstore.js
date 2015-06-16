var todoApp = angular.module('todoApp',[]);

var model = {
	user: 'Livne',
	};

	todoApp.run(function ($http) {
	//console.log('Hey');
	$http.get("https://authorsws.herokuapp.com/bestSellers").success(function (data) {
		//alert('Hey');
		//console.log('entered browser request: ' + data);
		model.items = data;
		}).error(function (data, status, headers, config) {
	        alert("error" + data + status);
	        return status;
		});
});
todoApp.controller('BooksCtrl', function($scope,$http) {
	$scope.todo = model;

	$scope.searchById = function(book_id) { 
		$http.get("https://authorsws.herokuapp.com/bookById/" +book_id).success(function (data) {
			console.log('book returnd: ' + data.name);
			$scope.todo.items = [];
			$scope.todo.items.push(data);
			//$scope.todo.items = data;
		}).error(function (data, status, headers, config) {
	        alert("error" + data + status);
	        return status;
		});
	};	

	// "https://authorsws.herokuapp.com/bestSellers" + param

});

