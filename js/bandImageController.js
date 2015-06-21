beatDown.controller('BandImageController', ['$scope', function($scope) {
  // $scope.camImg = false;
  // $scope.pieImg = false;
  // $scope.tooHotImg = false;
  // $scope.sothamImg = false;
  // $scope.ryanImg = false;
  $scope.bandMember = {
    camImg : {showImg : false, imgName : "milnes"},
    pieImg : {showImg : false, imgName : "pie"},
    tooHotImg : {showImg : false, imgName : "tooHotty"},
    sothamImg : {showImg : false, imgName : "sotham2"},
    ryanImg : {showImg : false, imgName : "ryan"}
  };
  $scope.votes = 0;
  $scope.votedAleady = false;
  $scope.voter = {'votes': 0, 'votedAleady': false}

  $scope.hoverIn = function(band) {
    console.log('in ' + $scope.bandMember[band].showImg)
    $scope.bandMember[band].showImg = true

    console.log('out ' + $scope.bandMember[band].showImg)
     return $scope.bandMember[band].showImg
  };

  $scope.hoverOut = function(band) {
    $scope.bandMember[band].showImg = false
  };

  $scope.voteCount = function() {
    if ($scope.votedAleady == false) {
      $scope.votes += 1;
      $scope.votedAleady = true;
    }
  };

}]);