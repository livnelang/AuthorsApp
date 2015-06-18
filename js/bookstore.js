var booksApp = angular.module('booksApp',[]);

var model = {
	user: 'Livne',
	};

	booksApp.run(function ($http) {
	$http.get("https://authorsws.herokuapp.com/bestSellers").success(function (data) {
		model.items = data;
		}).error(function (data, status, headers, config) {
	        alert("error" + data + status);
	        return status;
		});
});
	booksApp.controller('BooksCtrl', function($scope,$http) {
		$scope.todo = model;


	/**
	* searchById Function Once Triggered
	*/
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

	/**
	* searchByYear Function Once Triggered
	*/
	$scope.searchByYear = function(book_year) { 
		$http.get("https://authorsws.herokuapp.com/bookByYear/" +book_year).success(function (data) {
			console.log('book returnd: ' + data);
			$scope.todo.items = [];
			$scope.todo.items = data;
			//$scope.todo.items = data;
		}).error(function (data, status, headers, config) {
	        alert("error" + data + status);
	        return status;
		});
	};

	// "https://authorsws.herokuapp.com/bestSellers" + param

});

