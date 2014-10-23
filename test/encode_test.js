/*global describe, it*/
'use strict';

var encode = require('../lib/encode');

describe('Encode',function(){
    describe('tolerance 5', function(){
        it('should return [green,blue,red,gold] for 5k6', function(){
            encode('5k6',5).should.be.eql(['green','blue','red','gold']);
            encode('3m6',5).should.be.eql(['orange','blue','green','gold']);
            encode('9r6',5).should.be.eql(['white','blue','gold','gold']);
            encode('r6',5).should.be.eql(['blue','black','silver','gold']);
        });
    });

    describe('for 0',function(){
        it('should return [black,black,black,gold] for tolerance 5', function(){
            encode(0,5).should.be.eql(['black','black','gold','gold']);
        });
    });

    describe('for 5k6',function(){
        it('should return [green,blue,black,brown,violet] for tolerance 0.1', function(){
            encode('5k6',0.1).should.be.eql(['green','blue','black','brown','violet']);
            encode('5K6',0.1).should.be.eql(['green','blue','black','brown','violet']);
            encode('5.6k',0.1).should.be.eql(['green','blue','black','brown','violet']);
            encode('5600',0.1).should.be.eql(['green','blue','black','brown','violet']);
        });

        it('should return [green,blue,black,brown,blue] for tolerance 0.25', function(){
            encode('5k6',0.25).should.be.eql(['green','blue','black','brown','blue']);
            encode('5K6',0.25).should.be.eql(['green','blue','black','brown','blue']);
            encode('5.6k',0.25).should.be.eql(['green','blue','black','brown','blue']);
            encode('5600',0.25).should.be.eql(['green','blue','black','brown','blue']);
        });

        it('should return [green,blue,black,brown,green] for tolerance 0.5', function(){
            encode('5k6',0.5).should.be.eql(['green','blue','black','brown','green']);
            encode('5K6',0.5).should.be.eql(['green','blue','black','brown','green']);
            encode('5.6k',0.5).should.be.eql(['green','blue','black','brown','green']);
            encode('5600',0.5).should.be.eql(['green','blue','black','brown','green']);
        });

        it('should return [green,blue,black,brown,brown] for tolerance 1', function(){
            encode('5k6',1).should.be.eql(['green','blue','black','brown','brown']);
            encode('5K6',1).should.be.eql(['green','blue','black','brown','brown']);
            encode('5.6k',1).should.be.eql(['green','blue','black','brown','brown']);
            encode('5600',1).should.be.eql(['green','blue','black','brown','brown']);
        });

        it('should return [green,blue,black,brown,red] for tolerance 2', function(){
            encode('5k6',2).should.be.eql(['green','blue','black','brown','red']);
            encode('5K6',2).should.be.eql(['green','blue','black','brown','red']);
            encode('5.6k',2).should.be.eql(['green','blue','black','brown','red']);
            encode('5600',2).should.be.eql(['green','blue','black','brown','red']);
        });

        it('should return [green,blue,red,gold] for tolerance 5', function(){
            encode('5k6',5).should.be.eql(['green','blue','red','gold']);
            encode('5K6',5).should.be.eql(['green','blue','red','gold']);
            encode('5.6k',5).should.be.eql(['green','blue','red','gold']);
            encode('5600',5).should.be.eql(['green','blue','red','gold']);
        });

        it('should return [green,blue,black,brown,silver] for tolerance 10', function(){
            encode('5k6',10).should.be.eql(['green','blue','red','silver']);
            encode('5K6',10).should.be.eql(['green','blue','red','silver']);
            encode('5.6k',10).should.be.eql(['green','blue','red','silver']);
            encode('5600',10).should.be.eql(['green','blue','red','silver']);
        });

        it('should return [green,blue,black,brown,none] for tolerance 20', function(){
            encode('5k6',20).should.be.eql(['green','blue','red','none']);
            encode('5K6',20).should.be.eql(['green','blue','red','none']);
            encode('5.6k',20).should.be.eql(['green','blue','red','none']);
            encode('5600',20).should.be.eql(['green','blue','red','none']);
        });
    });
});