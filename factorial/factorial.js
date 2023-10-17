// created a factorial function using recursive method 
function factorial(n){
    // the base case is 0 
    if(n==0){
        return 1;
    }else{
        // should keep subtracting till reaches base case 
        return n * factorial(n-1)
    }
}

const chai = require('chai');
const assert = chai.assert;


// decribed the factorial of 0 and its result
describe('factorial function', function() {
  it('return 1 when n = 0', function() {
    const result = factorial(0);
    assert.equal(result, 1);
  });

})








