/*global describe, it*/
'use strict';

var should = require('should');

var color = require('../lib/colorMap');

var colorToValueMap = {
    'black'     : 0,
    'brown'     : 1,
    'red'       : 2,
    'orange'    : 3,
    'yellow'    : 4,
    'green'     : 5,
    'blue'      : 6,
    'violet'    : 7,
    'grey'      : 8,
    'white'     : 9,
    'gold'      : -1,
    'silver'    : -2
};

function randomizeCharCase(value){
    if(value){
        value = value.split('');
        for(var i = 0 ; i < value.length; i++) {
            var random = Math.abs(Math.random());
            value[i] = random > 0.5 ? value[i].toUpperCase() : value[i].toLowerCase();
        }
        return value.join('');
    }

    return value;
}

describe('Color Map', function(){
    describe('function digitColor', function(){
        it('should return color corresponding to the digit', function(){
            for (var i = -2 ; i < 10 ; i++) {
                colorToValueMap[color.digitColor(i)].should.equal(i);
            }

            color.digitColor(10).should.equal('black');
        });
    });

    describe('function digitValue', function(){
        it('should return value corresponding to the color', function(){
            for (var x in colorToValueMap){
                var value = color.digitValue(randomizeCharCase(x));
                should.exist(value);
                value.should.equal(colorToValueMap[x]);
            }

            color.digitValue('unknown').should.equal(0);
        });
    });

    describe('function toleranceColor', function(){
        it('should return color corresponding to the tolerance percentage', function(){
            color.toleranceColor(0.1).should.be.equal('violet');
            color.toleranceColor(0.25).should.be.equal('blue');
            color.toleranceColor(0.5).should.be.equal('green');
            color.toleranceColor(1).should.be.equal('brown');
            color.toleranceColor(2).should.be.equal('red');
            color.toleranceColor(5).should.be.equal('gold');
            color.toleranceColor(10).should.be.equal('silver');
            color.toleranceColor(20).should.be.equal('none');
            color.toleranceColor(100).should.be.equal('none');
            color.toleranceColor(0.1111).should.be.equal('none');
        });
    });

    describe('function toleranceValue', function(){
        it('should return tolerance percentage corresponding to the color', function(){
            color.toleranceValue(randomizeCharCase('violet')).should.be.equal(0.1);
            color.toleranceValue(randomizeCharCase('blue')).should.be.equal(0.25);
            color.toleranceValue('green').should.be.equal(0.5);
            color.toleranceValue('brown').should.be.equal(1);
            color.toleranceValue('red').should.be.equal(2);
            color.toleranceValue('gold').should.be.equal(5);
            color.toleranceValue('silver').should.be.equal(10);
            color.toleranceValue(randomizeCharCase('none')).should.be.equal(20);
            color.toleranceValue().should.be.equal(20);
            color.toleranceValue('ssdnglsg').should.be.equal(20);
        });
    });

    describe('function multiplierColor', function(){
        it('should return color corresponding to the multiple value', function(){
            for (var i = -2 ; i < 10 ; i++) {
                colorToValueMap[color.multiplierColor(Math.pow(10,i))].should.equal(i);
            }

            colorToValueMap[color.multiplierColor(0.9)].should.equal(-1);
            colorToValueMap[color.multiplierColor(0.09)].should.equal(-2);
            colorToValueMap[color.multiplierColor(0.009)].should.equal(0);
            colorToValueMap[color.multiplierColor()].should.equal(0);
        });
    });

    describe('function multiplierValue', function(){
        it('should return multiplier value corresponding to the color', function(){
            for (var x in colorToValueMap){
                var value = color.multiplierValue(randomizeCharCase(x));
                should.exist(value);
                value.should.equal(Math.pow(10,colorToValueMap[x]));
            }
        });
    });
});