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

    describe('function convertFromNotation',function(){
        it('should return 0 for no value',function(){
            utils.convertFromNotation().should.be.equal(0);
            utils.convertFromNotation('').should.be.equal(0);
            utils.convertFromNotation(0).should.be.equal(0);
        });

        it('should return same value for numbers',function(){
            utils.convertFromNotation(10).should.be.equal(10);
            utils.convertFromNotation(0.1).should.be.equal(0.1);
            utils.convertFromNotation(9999.999).should.be.equal(9999.999);
        });

        it('should return value with r as the same number', function(){
            utils.convertFromNotation('1r').should.be.equal(1);
            utils.convertFromNotation('1r1').should.be.equal(1.1);
            utils.convertFromNotation('r1').should.be.equal(0.1);
            utils.convertFromNotation('9r').should.be.equal(9);
            utils.convertFromNotation('9r9').should.be.equal(9.9);
            utils.convertFromNotation('r09').should.be.equal(0.09);
            utils.convertFromNotation('00r09').should.be.equal(0.09);

            utils.convertFromNotation('1R').should.be.equal(1);
            utils.convertFromNotation('1R1').should.be.equal(1.1);
            utils.convertFromNotation('R1').should.be.equal(0.1);
            utils.convertFromNotation('9R').should.be.equal(9);
            utils.convertFromNotation('9R9').should.be.equal(9.9);
            utils.convertFromNotation('R09').should.be.equal(0.09);
            utils.convertFromNotation('00R09').should.be.equal(0.09);
        });

        it('should return value with k as the number multiplied by 1000', function(){
            utils.convertFromNotation('1k').should.be.equal(1000);
            utils.convertFromNotation('1k1').should.be.equal(1100);
            utils.convertFromNotation('k1').should.be.equal(100);
            utils.convertFromNotation('9k').should.be.equal(9000);
            utils.convertFromNotation('9k9').should.be.equal(9900);
            utils.convertFromNotation('k09').should.be.equal(90);
            utils.convertFromNotation('00k09').should.be.equal(90);

            utils.convertFromNotation('1K').should.be.equal(1000);
            utils.convertFromNotation('1K1').should.be.equal(1100);
            utils.convertFromNotation('K1').should.be.equal(100);
            utils.convertFromNotation('9K').should.be.equal(9000);
            utils.convertFromNotation('9K9').should.be.equal(9900);
            utils.convertFromNotation('K09').should.be.equal(90);
            utils.convertFromNotation('00K09').should.be.equal(90);
        });

        it('should return value with m as the number multiplied by 1000000', function(){
            utils.convertFromNotation('1m').should.be.equal(1000000);
            utils.convertFromNotation('1m1').should.be.equal(1100000);
            utils.convertFromNotation('m1').should.be.equal(100000);
            utils.convertFromNotation('9m').should.be.equal(9000000);
            utils.convertFromNotation('9m9').should.be.equal(9900000);
            utils.convertFromNotation('m09').should.be.equal(90000);
            utils.convertFromNotation('00m09').should.be.equal(90000);

            utils.convertFromNotation('1M').should.be.equal(1000000);
            utils.convertFromNotation('1M1').should.be.equal(1100000);
            utils.convertFromNotation('M1').should.be.equal(100000);
            utils.convertFromNotation('9M').should.be.equal(9000000);
            utils.convertFromNotation('9M9').should.be.equal(9900000);
            utils.convertFromNotation('M09').should.be.equal(90000);
            utils.convertFromNotation('00M09').should.be.equal(90000);
        });
    });
});