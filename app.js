(function(){
  'use stirct'

  angular.module('LunchCheck', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject['$scope']

  function LunchCheckerController($scope){
    $scope.dishes="";
    $scope.message="";


    $scope.lunchCheck=function(){
      var dishes = $scope.dishes;
      if(dishes.length>0){
        var count = 0;
        var dishesArr = dishes.split(',');
        var dishesArrSize = dishesArr.length;
        for(var i=0; i<dishesArrSize; i++){
          if(dishesArr[i].trim().length>0){
            count++;
          }
        }
        $scope.message = count>3 ? "Too Much!" : "Enjoy!";
      }
      else{
        $scope.message = "Please enter the data";
      }
    };

}

})();
