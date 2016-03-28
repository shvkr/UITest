var app = angular.module('todoApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.alltodos = [
    {
      todo: "Learn Angular",
      done: true
    },{
      todo: "Build an App",
      done: false
    }
  ];
  
  $scope.addit = function() {
    if($scope.additem.length !== 0) {
      $scope.alltodos.push({todo:$scope.additem, done:false});
      $scope.additem = "";
    }
  }
  
  
  
  
  
  /* Filters */
  $scope.totaltodos = function() {
    return $scope.alltodos.length;
  }
  $scope.remainingtodos = function() {
    var count = 0;
    for(var i = 0; i < $scope.alltodos.length; i++) {
      if($scope.alltodos[i].done === false) {
        count++;
      }
    }
    return count;
  }
  $scope.completedtodos = function() {
    var count = 0;
    for(var i = 0; i < $scope.alltodos.length; i++) {
      if($scope.alltodos[i].done === true) {
        count++;
      }
    }
    return count;
  }
});
