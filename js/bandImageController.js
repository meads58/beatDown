beatDown.controller('BandImageController', ['$scope', function($scope) {
  $scope.camImg = false;
  $scope.pieImg = false;
  $scope.tooHotImg = false;
  $scope.sothamImg = false;
  $scope.ryanImg = false;
  $scope.votes = 0;
  $scope.votedAleady = false;
  $scope.voter = {'votes': 0, 'votedAleady': false}

  $scope.hoverIn = function(bandMemeber) {
    $scope[bandMemeber] = true
  };

  $scope.hoverOut = function(bandMemeber) {
    $scope[bandMemeber] = false
  };

  $scope.voteCount = function() {
    if ($scope.votedAleady == false) {
      $scope.votes += 1;
      $scope.votedAleady = true;
    }
  };

}]);