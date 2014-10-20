/*global describe, it*/
'use strict';
var should = require('should');
var utils = require('../lib/utils');

should.warn = false;

describe('Utils', function(){
    describe('function reverseMap', function(){
        it('should reverse the map', function(){
            var map = {
                'a' : 200,
                'b' : 'c',
                'd' : 'hello',
                'obj' : {
                    k : 1
                }
            };

            var reverse = utils.reverseMap(map);
            for(var x in reverse) {
                var value = reverse[x];
                x.should.be.eql(map[value]);
            }
        });
    });

    describe('function findExpFor10', function(){
        it('should return 0', function(){
            for(var i = 0 ; i < 10; i++) {
                utils.findExpFor10(i).should.be.equal(0);
            } 
            utils.findExpFor10(1.1).should.be.equal(0);
            utils.findExpFor10(9.9).should.be.equal(0);
            utils.findExpFor10(1.1).should.be.equal(0);
            utils.findExpFor10('99999.9.9').should.be.equal(0);   
        });

        it('should return 1', function(){
            utils.findExpFor10(10).should.be.equal(1);
            utils.findExpFor10(19).should.be.equal(1);
            utils.findExpFor10(99).should.be.equal(1);
            utils.findExpFor10(10.0001).should.be.equal(1);
            utils.findExpFor10(99.0001).should.be.equal(1);
            utils.findExpFor10('10').should.be.equal(1);
            utils.findExpFor10('10.0001').should.be.equal(1);
            utils.findExpFor10('99.0001').should.be.equal(1);
        });

        it('should return 10', function(){
            utils.findExpFor10(10 * Math.pow(10,9)).should.be.equal(10);
            utils.findExpFor10(19 * Math.pow(10,9)).should.be.equal(10);
            utils.findExpFor10(99 * Math.pow(10,9)).should.be.equal(10);
            utils.findExpFor10(10.0001 * Math.pow(10,9)).should.be.equal(10);
            utils.findExpFor10(99.0001 * Math.pow(10,9)).should.be.equal(10);
            utils.findExpFor10('10000000000').should.be.equal(10);
            utils.findExpFor10('10000000000.0001').should.be.equal(10);
            utils.findExpFor10('99000000000.0001').should.be.equal(10);
        });

        it('should return -1', function(){
            utils.findExpFor10(0.1).should.be.equal(-1);
            utils.findExpFor10(0.19).should.be.equal(-1);
            utils.findExpFor10(0.99).should.be.equal(-1);
            utils.findExpFor10(0.100001).should.be.equal(-1);
            utils.findExpFor10(0.990001).should.be.equal(-1);
            utils.findExpFor10('0.10').should.be.equal(-1);
            utils.findExpFor10('0.100001').should.be.equal(-1);
            utils.findExpFor10('0.990001').should.be.equal(-1);
        });

        it('should return -10', function(){
            utils.findExpFor10(0.1 * Math.pow(10,-9)).should.be.equal(-10);
            utils.findExpFor10(0.19 * Math.pow(10,-9)).should.be.equal(-10);
            utils.findExpFor10(0.99 * Math.pow(10,-9)).should.be.equal(-10);
            utils.findExpFor10(0.100001 * Math.pow(10,-9)).should.be.equal(-10);
            utils.findExpFor10(0.990001 * Math.pow(10,-9)).should.be.equal(-10);
            utils.findExpFor10('0.0000000001').should.be.equal(-10);
            utils.findExpFor10('0.00000000010001').should.be.equal(-10);
            utils.findExpFor10('0.00000000099001').should.be.equal(-10);
        });
    });
});