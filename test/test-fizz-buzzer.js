const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer.js');

// unit tests for fizzBuzzer function
describe('fizzBuzzer', function() {
	// testing the normal case
	it('should return fizz for numbers divisible by 3', function () {
		// range of normal number inputs 
		const normalCases = [
			{a: 15, expected: 'fizz-buzz'},
			{a: 10, expected: 'buzz'},
			{a: 9, expected: 'fizz'}
		];
		// for each input (a), `fizzBuzzer` should
    	// produce the expected value
    	normalCases.forEach(function(input) {
    	  const answer = fizzBuzzer(input.a);
    	  answer.should.equal(input.expected);
    	});
	})
	it('should raise error if arg not number', function() {
	    // range of bad inputs where input is not a number
	    const badInputs = [
	      ['a'],
	      [false],
	      ['2']
	 	];
	 	// prove that an error is raised for bad inputs
	    badInputs.forEach(function(input) {
		    (function() {
		        adder(input[0])
		    }).should.throw(Error);
	    });
  	});
});