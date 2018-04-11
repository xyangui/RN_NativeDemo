
jest.dontMock('../T009_Test/httprequest');

describe('httprequest', function() {
  it('adds 1 + 2 to equal 3', function() {

    var httprequest = require('../T009_Test/httprequest');

    expect(httprequest(1, 2)).toBe(3);
  });
});
