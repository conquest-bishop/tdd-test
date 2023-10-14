let chai = require ("chai")
var assert = chai.assert;


class Multiply{
    constructor(){
        console.log("If you build it, i will test it :)")
    }

    multiply(a, b){
        let result;
        result = a * b;
        return result;
    }

    add(x, y){
        let result2;
        result2 = x + y;
        return result2;
    }
}

let myobj = new Multiply


describe('test suit', function(){
    it("should multiply numbers and return result", function(){
        let result = myobj.multiply(1, 1)
        assert.equal(result, 1)
    })

    it("should multiply numbers and return result", function(){
            let result = myobj.multiply(2, 2)
            assert.equal(result, 4)
        })


    it("should multiply numbers and return result", function(){
        let result = myobj.multiply(23, 3)
        assert.equal(result, 69)
    })

    it("should add numbers and return result", function(){
        let result = myobj.add(2, 4)
        assert.equal(result, 6)
    })
})