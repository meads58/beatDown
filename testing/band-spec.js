describe('beatDown homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:3000');
    })


  it('should have a title and heading', function() {
    var class_name = element(By.className('main_title'));
    expect(browser.getTitle()).toEqual('BeatDown');
    expect(class_name.getText()).toEqual('Beat Down');
  });

  it('allows user to click on band member', function() {
    var bandMemberCam = element(By.id('camster'));
    var camImage = element(By.binding('cam_image'))
    expect(bandMemberCam.getText).toEqual('false')
    bandMemberCam.click();
    expect(bandMemberCam.getText).toEqual('true')
  });

  it('allows a group to vote once per session for a tour', function() {
    var vote = element(By.id('voter'));
    var currentVotes = element(By.id('voteCount').getText());
    vote.click();
    expect(element(By.id('voteCount')).toEqual(currentVotes + 1);
    vote.click();
    expect(element(By.id('voteCount')).toEqual(currentVotes + 1);
  })
});

