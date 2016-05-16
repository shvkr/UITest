var app = angular.module('todoApp', ['ngRoute']);

app.config( function($routeProvider) {
	$routeProvider             
   	   .when('/login', {
       templateUrl: 'login.html',
       controller: 'MainCtrl'
         
       })
	   $routeProvider             
   	   .when('/AddTodos', {
       templateUrl: 'AddTodoForm.html',
       controller: 'MainCtrl'
         
       })
	   $routeProvider             
   	   .when('/RemainingTodos', {
       templateUrl: 'RemainingTodos.html',
       controller: 'MainCtrl'
         
       })
	   $routeProvider             
   	   .when('/CompletedTodos', {
       templateUrl: 'CompletedTodos.html',
       controller: 'MainCtrl'
         
       })
	});
app.controller('MainCtrl', function($scope,$rootScope, $location) {
  $rootScope.alltodos = [
    {
      todo: "Learn Angular",
      done: true
    },{
      todo: "Build an App",
      done: false
    }
  ];
  
  $scope.userList = [
    {
      userId: "user1",
      pwd: "user1"
    },{
      userId: "user2",
      pwd: "user2"
    }
  ];
  
  $scope.doLogin=function(userId,pwd){
   for (var i in $scope.userList) {
            if ($scope.userList[i].userId == userId && $scope.userList[i].pwd == pwd) {
				$rootScope.top="AddTodo.html";
				//$location.path('AddTodo');
				
            }
        }
  };
  
  $rootScope.AddTodos = function() {
    $rootScope.addTo = false;
	$rootScope.remainTo = false;
	$rootScope.compTo = false;
  }
  $rootScope.RemainingTodosss = function() {
	  $rootScope.addTo = true;
	$rootScope.remainTo = true;
	$rootScope.compTo = false;
	 
  }
  $rootScope.CompletedTodos = function() {
    $rootScope.addTo = true;
	$rootScope.remainTo = false;
	$rootScope.compTo = true;
	 
  }
  
  $rootScope.addit = function(additem) {
    if(additem.length !== 0) {
      $rootScope.alltodos.push({todo:additem, done:false});
      $rootScope.additem = "";
    }
  }
  
  
  
  
  
  /* Filters */
  $rootScope.totaltodos = function() {
    return $rootScope.alltodos.length;
  }
  $rootScope.remainingtodos = function() {
    var count = 0;
    for(var i = 0; i < $rootScope.alltodos.length; i++) {
      if($rootScope.alltodos[i].done === false) {
        count++;
      }
    }
    return count;
  }
  $rootScope.completedtodos = function() {
    var count = 0;
    for(var i = 0; i < $rootScope.alltodos.length; i++) {
      if($rootScope.alltodos[i].done === true) {
        count++;
      }
    }
    return count;
  }
});
