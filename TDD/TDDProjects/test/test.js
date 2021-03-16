let getAverage = require('../src/index');
let assert = require('assert');

// describe('The given array of numbers must be return as a string', function(){
//     it('example #1', function(){
//         let result = switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
//         assert.equal(result, 'codewars');
//     });
//     it('example #2', function(){
//         let result = switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']);
//         assert.equal(result, 'btswmdsbd kkw');
//     });
//     it('example #3', function(){
//         let result = switcher(['4', '24']);
//         assert.equal(result, 'wc');
//     })
// });

describe('Return the average of the given array rounded down to its nearest integer.', function(){
    it('example #1', function(){
        let result = getAverage([2,2,2,2]);
        assert.equal(result, 2);
    });
    it('example #1', function(){
        let result = getAverage([1,2,3,4,5,]);
        assert.equal(result, 3);
    });
    it('example #1', function(){
        let result = getAverage([1,1,1,1,1,1,1,2]);
        assert.equal(result, 1);
    });
});
