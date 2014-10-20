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

var mulMap = {
    'm' : Math.pow(10,6),
    'k' : Math.pow(10,3),
    'r' : Math.pow(10,0)
};

/**
 * converter BS 1852 notation to value
 * @param  {string} valueInNotaion value in BS 1852 notation
 * @return {number}                value
 */
exports.convertFromNotation = function convertFromNotation(valueInNotaion){
    var value = valueInNotaion || 0;
    if (typeof value === 'string' && value.trim()) {
        var match = value.match(/[mkr]/i);
        var mul = 1;
        if(match){
            match = match[0];
            mul = mulMap[match.toLowerCase()];
        }

        var values = value.split(match);
        if (values.length > 1){
            values[1] = '0.' + values[1];
        }

        return values
                .map(function(val){
                    return val * mul;
                })
                .reduce(function(prev,cur){
                    return prev + cur;
                });
    }

    return value;
};

