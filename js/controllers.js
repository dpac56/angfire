var myApp = angular.module("myApp", ["firebase"])

myApp.controller("MyController", ['$scope', '$firebase', 
	function($scope, $firebase){
		var ref = new Firebase("crackling-heat-1792.firebaseio.com");
        $scope.messages = $firebase(ref).$asArray();
	}
	]);


//Controller for authentication

myApp.controller("MyAuthCtrl", function($scope, $firebaseAuth){

});