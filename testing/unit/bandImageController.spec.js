describe('BandImageController', function() {
  beforeEach(module('BeatDown'));

  var ctrl, scope, camsImgStatus;
  var camsImgStatuss = "bandMember.camImg.showImg";

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('BandImageController', {$scope: scope});


  }));

  describe('show and hide band members', function() {
    it('intialises with all camImage set to false', function() {
      expect(scope.bandMember.camImg.showImg).toBe(false);
    });

    it("sets camImage to true when 'hoverIn' is called", function() {
      expect(scope.bandMember.camImg.showImg).toBe(false);
      scope.hoverIn('camImg');
      expect(scope.bandMember.camImg.showImg).toBe(true);
    });

    it("sets camImage to false when 'hoverOut' is called", function() {
      scope.hoverIn('camImg');
      expect(scope.bandMember.camImg.showImg).toBe(true);
      scope.hoverOut('camImg');
      expect(scope.bandMember.camImg.showImg).toBe(false);
    });
  });


  it('increments the vote value by one when clicked', function() {
    var currentCount = scope.votes;
    scope.voteCount();
    expect(scope.votes).toEqual(currentCount + 1);
  });

  it('only allows you to vote once', function() {
    var currentCount = scope.votes;
    scope.voteCount();
    scope.voteCount();
    expect(scope.votes).toEqual(currentCount + 1);
  });

  it('initialises with a not voted status', function() {
    expect(scope.votedAleady).toBe(false);
  })

  it("knows that have voted once you cast your vote this web session", function() {
    scope.voteCount();
    expect(scope.votedAleady).toBe(true);
  })

});