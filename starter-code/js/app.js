/* setup your angular app here */
var app = angular.module('FruitsAndVeggies', []);

app.controller('FruitAndVegCtrl', ['$scope', function($scope){
  $scope.fruits = [];
  $scope.veggies = [];
  $scope.isFruit = fruit;
  $scope.isVeg = vegetables;
  $scope.pool = shuffle(fruit.concat(vegetables));
  $scope.allRight = false;
  $scope.amISorted = false;

  $scope.addVeg = function(val){
    $scope.veggies.push($scope.pool[val]);
    $scope.pool.splice(val, 1);
    $scope.isWinner();
  }

  $scope.addFruit = function(val){
    $scope.fruits.push($scope.pool[val]);
    $scope.pool.splice(val, 1);
    $scope.isWinner();
  }

  $scope.moveFruitCenter = function(val){
    $scope.pool.push($scope.fruits[val]);
    $scope.fruits.splice(val, 1);
    $scope.isWinner();
    
  }

  $scope.moveVegCenter = function(val){
    $scope.pool.push($scope.veggies[val]);
    $scope.veggies.splice(val, 1);
    $scope.isWinner();
  }

  $scope.isWinner = function(){
    if($scope.pool.length === 0){
      for(var i = 0; i < $scope.fruits.length; i++){
        if(fruit.indexOf($scope.fruits[i]) == -1){
          return false;
        }
      }
      for(var i = 0; i < $scope.veggies.length; i++){
        if(vegetables.indexOf($scope.veggies[i]) == -1){
          return false;
        }
      }
    $scope.allRight = true;
    }
  }

  $scope.isSorted = function(){
      for(var i = 0; i < $scope.veggies.length; i++){
        console.log(vegetables[i] + " : " + $scope.veggies[i]);
        if(vegetables[i] !== $scope.veggies[i]){
          return false;
        }
      }
      for(var i = 0; i < $scope.fruits.length; i++){
        console.log(fruit[i] + " : " + $scope.fruits[i]);
        if(fruit[i] !== $scope.fruits[i]){
          return false;
        }
      }
    amISorted = true;
    console.log("YOU SORTED!");
  }

  $scope.isFruitMethod = function(val){
    if($scope.pool.length == 0){
      return $scope.isFruit.indexOf(val) == -1;
    }
  }

  $scope.isVegMethod = function(val){
    if($scope.pool.length == 0){
      return $scope.isVeg.indexOf(val) == -1;
    }
  }


}])
//debug stuff to show the app is loading and fruit / veggies are available

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);