var app = angular.module('SpiceWorks', []);

app.controller('applicationCtrl', function($scope){

// Here's the initial data. Again: don't worry about persistence :)
$scope.datas = [
  {id:0, name: "Mark-Paul Gosselaar", photo_url: "" },
  {id:1, name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  {id:2, name: "Alf", photo_url: "img/avatars/alf.png" },
  {id:3, name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  {id:4, name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  {id:5, name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  {id:6, name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  {id:7, name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

	
	// Create is called to add new image and sort the order new on top
	$scope.create = function(data){		
		//var len = $scope.datas.length;
		//window.alert(len);
		//$scope.datas.push(data);				
		$scope.datas.unshift(data);
		$scope.data = {};
	};

	//Splice will remove the data
	$scope.close = function(data) {
		$scope.datas.splice(data,1);	
	};


});


