
jest.dontMock('../T009_fetch_Test/sum');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
	var sum = require('../T009_fetch_Test/sum');
	expect(sum(1, 2)).toBe(3);
  });
});
