const mocha= require('mocha');
const chai= require('chai');
const reverseFactorial= require('./reverse_factorial.js');

mocha.describe('test reverse factorial', ()=> {
   mocha.it('should not be a factorial', ()=> {
       chai.expect('not a factorial').to.equal(reverseFactorial(479001600));
   }) 
})