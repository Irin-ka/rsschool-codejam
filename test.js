const assert = require('assert');
Object.freeze(assert);
const sumOfOters =require('./src/sumOfOther');
const make =require('./src/make');
const recursion =require('./src/recursion');
describe('sumOfOther', () => {
  it('0', () => {
    const res_0 = sumOfOters([2, 3, 4, 1]);
    assert.equal(res_0.indexOf(8),0);
  });
});
  describe('make', () => {
  it('10', () => {
    const res_10 = make(15)(34, 21, 666)(41)((a,b)=>a+b);
    assert.equal(res_10, 777);
  }); 
 });
describe('recursion', () => {
  
  it('20', () => {
    const res_20 = recursion( {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.equal(res_20[2][3],130);
  });
});
