let bonusTime = require('../src/index');
let assert = require('assert');

// Do I get a bonus?
describe('If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.', function(){
    it('example #1', function(){
        let result = bonusTime(10000, true);
        assert.equal(result, '£100000');
    });
    it('example #2', function(){
        let result = bonusTime(25000, true);
        assert.equal(result, '£250000');
    })
    it('example #3', function(){
        let result = bonusTime(10000, false);
        assert.equal(result, '£10000');
    })
})

// My head is at the wrong end!
// describe('Incorrect division method',function(){
//     it('example #1', function(){
//         let result = solve(2,1);
//         assert.equal(result, 2);
//     });it('example #2', function(){
//         let result = solve(8,2);
//         assert.equal(result, 4);
//     })
//     it('example #3', function(){
//         let result = solve(12,4);
//         assert.equal(result, 3);
//     })
// })


// Get the next prime
// describe('Get the next prime', function(){
//     it('example #1', function(){
//         let result = nextPrime(0);
//         assert.equal(result, 2);
//     })
//     it('example #2', function(){
//         let result = nextPrime(1);
//         assert.equal(result, 2);
//     })
//     it('example #3', function(){
//         let result = nextPrime(2);
//         assert.equal(result, 3);
//     })
// })

//Over the road
// describe('Given your house number address and length of street n, give the house number on the opposite side of the street.',function(){
//     it('example #1', function(){
//         let result = overTheRoad(1,3);
//         assert.equal(result, 6)
//     })
//     it('example #2', function(){
//         let result = overTheRoad(3,3);
//         assert.equal(result, 4)
//     })
//     it('example #3', function(){
//         let result = overTheRoad(2,3);
//         assert.equal(result, 5)
//     })
// })


//Numbers to Letters
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively
// describe('Given an array of numbers (in string format), you must return a string',function(){
//     it('example #1', function(){
//         let result = switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
//         assert.equal(result, 'codewars');
//     })
//     it('example #2', function(){
//         let result = switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']);
//         assert.equal(result, 'btswmdsbd kkw');
//     })
//     it('example #3', function(){
//         let result = switcher(['4', '24']);
//         assert.equal(result, 'wc');
//     })
// })

//Find the deleted number
// describe('find the lost number in number sequence', function(){
//     it('example #1', function(){
//         let result = findDeletedNumber([1,2,3,4,5], [3,4,1,5]);
//         assert.equal(result, 2)
//     });
//     it('example #2', function(){
//         let result = findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]);
//         assert.equal(result, 5)
//     });
//     it('example #3', function(){
//         let result = findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]);
//         assert.equal(result, 0)
//     });
// })

// Move the Vowel
// describe('Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.',function(){
//     it('example #1', function(){
//         let result = moveVowel("day");
//         assert.equal(result, "dya");
//     });
//     it('example #2', function(){
//         let result = moveVowel("apple");
//         assert.equal(result, "pplae");
//     });
//     it('example #3', function(){
//         let result = moveVowel("peace");
//         assert.equal(result, "pceae");
//     });
// })


// Sum of the triangular Numbers
// describe('Return the sum of the Triangular Numbers up to and including the nth triangular Numbers.', function(){
//     it('example #1', function(){
//         let result = sumTriangularNumbers(6);
//         assert.equal(result, 56);
//     });
//     it('example #2', function(){
//         let result = sumTriangularNumbers(34);
//         assert.equal(result, 7140);
//     });
//     it('example #3', function(){
//         let result = sumTriangularNumbers(-291);
//         assert.equal(result, 0);
//     });
// })


// Get The Average
// describe('Return the average of the given array rounded down to its nearest integer.', function(){
//     it('example #1', function(){
//         let result = getAverage([2,2,2,2]);
//         assert.equal(result, 2);
//     });
//     it('example #1', function(){
//         let result = getAverage([1,2,3,4,5,]);
//         assert.equal(result, 3);
//     });
//     it('example #1', function(){
//         let result = getAverage([1,1,1,1,1,1,1,2]);
//         assert.equal(result, 1);
//     });
// });

// Numbers to Strings
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