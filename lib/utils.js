'use strict';

/**
 * Function to find the power of 10 as an integer
 * @param  {number} value Number whos power is to be found
 * @return {integer}       power value
 */
exports.findExpFor10 = function findExpFor10(value){
    var i = 0;
    var abs_value = Math.abs(value);
    if(abs_value === 0 || abs_value ===1) {
        return 0;
    }

    if(abs_value > 1) {
        while((abs_value /= 10) >= 1){
            i++;
        }
    } else if(abs_value < 1) {
        while(abs_value < 1) {
            i--;
            abs_value *= 10;
        }
    }
    return i;
};

/**
 * Reverse the key-value mapping to value-key
 * @param  {object} map The map to be reversed
 * @return {object}     reversed Map
 */
exports.reverseMap = function reverseMap(map){
    var reverse = {};
    for (var key in map) {
        if(typeof map[key] !== 'object'){
            reverse[map[key]] = key;
        }
    }
    return reverse;
};