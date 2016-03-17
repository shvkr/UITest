// creating object for our app
var app = angular.module('everyDay',[]);

function saveController($scope){
	//save function defination
	$scope.save = function(){
	alert('Thank You! We will come in touch with you soon.');
	$scope.email={};	
	}
}
//creating controller
app.controller('saveController',['$scope',saveController]);