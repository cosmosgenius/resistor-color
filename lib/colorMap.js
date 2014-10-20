'use strict';
var utils = require('./utils');

/**
 * Map holding the color to value 
 * @type {Object}
 */
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

/**
 * Map holding color to tolerance value
 * @type {Object}
 */
var colorToTolerance = {
    'brown'     : 1,
    'red'       : 2,
    'green'     : 0.5,
    'blue'      : 0.25,
    'violet'    : 0.1,
    'gold'      : 5,
    'silver'    : 10,
    'none'      : 20
};

/**
 * Map holding value to color
 * @type {object}
 */
var valueToColorMap = utils.reverseMap(colorToValueMap);

/**
 * Map holding tolerance to color
 * @type {object}
 */
var toleranceToColor = utils.reverseMap(colorToTolerance);

/**
 * Function to get the color of the digit provided
 * @param  {integer} value integer value
 * @return {string}       color corresponding to the value
 */
exports.digitColor = function digitColor(value) {
    return valueToColorMap[value] || valueToColorMap[0];
};

/**
 * Function to get the digit of the color
 * @param  {string} color 
 * @return {integer}       value of the color
 */
exports.digitValue = function digitValue(color) {
    if(color && color.toLowerCase) {
        color = color.toLowerCase();
    }
    return colorToValueMap[color] || 0;
};

/**
 * Function to get the color for the tolerance
 * @param  {number} value tolerance value in percentage
 * @return {string}       color
 */
exports.toleranceColor = function toleranceColor(value) {
    return toleranceToColor[value] || toleranceToColor[20];
};

/**
 * Function to get the tolerance for the color
 * @param  {string} color Input color
 * @return {number}       tolerance percentage
 */
exports.toleranceValue = function toleranceValue(color) {
    if(color && color.toLowerCase) {
        color = color.toLowerCase();
    }
    return colorToTolerance[color] || 20;
};

/**
 * Function to find the multiplier color
 * @param  {number} value Real number
 * @return {string}       color
 */
exports.multiplierColor = function multiplierColor(value) {
    var exp = utils.findExpFor10(value);
    return exports.digitColor(exp);
};

/**
 * Function to find the multiplier value for the given color
 * @param  {String} color Input color
 * @return {number}       multiplier
 */
exports.multiplierValue = function multiplierValue(color) {
    if(color && color.toLowerCase) {
        color = color.toLowerCase();
    }
    var exp = colorToValueMap[color] || 0;
    return Math.pow(10,exp);
};