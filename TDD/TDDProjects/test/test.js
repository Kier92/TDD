let switcher = require('../src/index');
let assert = require('assert');

describe('The given array of numbers must be return as a string', function(){
    it('example #1', function(){
        let result = switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
        assert.equal(result, 'codewars');
    });
    it('example #2', function(){
        let result = switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']);
        assert.equal(result, 'btswmdsbd kkw');
    });
    it('example #3', function(){
        let result = switcher(['4', '24']);
        assert.equal(result, 'wc');
    })
});
