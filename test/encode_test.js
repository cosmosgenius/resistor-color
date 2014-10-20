/*global describe, it*/
'use strict';

var should = require('should');
var encode = require('../lib/encode');

describe('Encode',function(){
    describe('tolerance 5', function(){
        it('should return [black,black,black,gold] for 0', function(){
            encode(0).should.be.eql(['black','black','gold','gold']);
        });

        it('should return [green,blue,red,gold] for 5k6', function(){
            encode('5k6',5).should.be.eql(['green','blue','red','gold']);
            encode('3m6',5).should.be.eql(['orange','blue','green','gold']);
            encode('9r6',5).should.be.eql(['white','blue','gold','gold']);
            encode('r6',5).should.be.eql(['blue','black','silver','gold']);
        });
    });
});