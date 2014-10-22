'use strict';

var utils = require('./utils');
var color = require('./colorMap');

var defaultTolerance = 5;
var fourBandThresholdTolerance = 5;

function getDigits(value, exp){
    value = value * 10000 * Math.pow(10,-exp);
    value = (value ? value.toString() : '0000').split('');
    
    return value.slice(0,3);
}

module.exports = function encode(value, tolerance) {
    tolerance = tolerance || defaultTolerance;

    var number = utils.convertFromNotation(value).toString();
    var multiplier = utils.findExpFor10(number);
    var digits = getDigits(number,multiplier);
   
    if(tolerance >= fourBandThresholdTolerance) {
        digits = digits.slice(0,2);
        digits.push(multiplier-1);
    } else {
        digits.push(multiplier-2);
    }

    var colors = digits.map(function(digit){
        return color.digitColor(digit);
    });

    colors.push(color.toleranceColor(tolerance));

    return colors;
};

