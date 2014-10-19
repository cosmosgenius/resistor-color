/*global describe, it*/
'use strict';
var should = require('should');

var resistorColor = require('../');

describe('Resistor color', function(){

    describe('resistorToColor', function(){

        it('should exist' ,function(){
            should.exist(resistorColor.resistorToColor);
            resistorColor.resistorToColor(1);
        });

    });
    
});
