app.controller('UserController', function($scope, $http){
	$scope.users = [];

	var promise = $http.get('http://localhost:8080/user/');
	promise.then(function(retorno){
		$scope.users = retorno.data;
		console.log($scope.users);
	})
	.catch(function(erro){
		console.log(erro);
	});

});