const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('Zeros', () => {
  it('0', () => {
    const zerosCount = sumOfOther([2, 3, 4, 1]);
    assert.equal(zerosCount, [8, 7, 6, 9]);
  });

});
