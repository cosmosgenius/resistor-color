'use strict';

/**
 * Reverse the key-value mapping to value-key
 * @param  {object} map The map to be reversed
 * @return {object}     reversed Map
 */
function reverseMap(map) {
    var reverse = {};
    for (var key in map) {
        reverse[map[key]] = key;
    }
    return reverse;
}

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
 * Map holding value to color
 * @type {[object]}
 */
var valueToColorMap = reverseMap(colorToValueMap);


/**
 * Function to get the color of the value provided
 * @param  {integer} value integer value
 * @return {string}       color corresponding to the value
 */
exports.color = function color(value) {
    return valueToColorMap[value];
};

/**
 * Function to get the value of the color
 * @param  {string} color 
 * @return {integer}       value of the color
 */
exports.value = function value(color) {
    return colorToValueMap[color];
};