/**
 * Get color for the value
 * @param  {char}   value   range: -2 to 9
 * @return {string}         retun color
 */
function getcolor(value){
    var color = {'-2': "silver",
            '-1': "gold",
            '0': "black",
            '1': "brown",
            '2': "red",
            '3': "orange",
            '4': "yellow",
            '5': "green",
            '6': "blue",
            '7': "violet",
            '8': "grey",
            '9': "white"};
    return color[value];
}

/**
 * Return color for tolerance value
 * @param  {integer} tol tolerance value
 * @return {string}     return color or -1 if
 *                      it doesn't exist
 */
function tolcolor(tol){
    //Return Color for tolarance value
    var val = parseInt(tol * 100,10);
    if (val == 100)
        return getcolor(1);
    if (val == 200)
        return getcolor(2);
    if (val == 50)
        return getcolor(5);
    if (val == 25)
        return getcolor(6);
    if (val == 10)
        return getcolor(7);
    if (val == 5)
        return getcolor(8);
    if (val == 500)
        return getcolor(-1);
    if (val == 1000)
        return getcolor(-2);
    if (val == 2000)
        return "";
    return '-1';
}

/**
 * Return the color bands
 * @param  {String}     valuestr resistor value
 * @param  {double}     tol      tolerance value
 * @param  {interger}   mul      multiplier([0,3,6])
 * @return {Dict object}         band color
 */
exports.valuetocolor = function (valuestr, tol, mul){

    tol = tol || 5;
    mul = mul || null;
    
    digit = [0, 0, 0];
    dec = -1;
    noofdigit = parseInt(tol,10) > 2 ? 0 : 1;
    i = 0;
    dot_mul_re = /^[0-9]*\.[0-9]+[kKmMrR]$/;
    mul_re = /^[0-9]*[kKmMrR][0-9]+$/;

    if (dot_mul_re.test(valuestr)){
        mul_char = valuestr[valuestr.length - 1];
        valuestr = valuestr.replace(mul_char, '');
        valuestr = valuestr.replace('.', mul_char);
    }

    if (mul_re.test(valuestr))
        mul = null;

    valuestr = valuestr.match(/[1-9]+.*$/)[0];

    for(var j = 0; j < valuestr.length; ++j){
        if (valuestr[j].match(/[0-9]/) !== null){
            if(i < 3)
                digit[i] = parseInt(valuestr[j], 10);
            i++;
        }else if(mul === null){
            dec = i;
            switch(valuestr[j]){
                case 'r':
                case 'R':
                case '.':
                    mul = 0;
                    break;
                case 'k':
                case 'K':
                    mul = 3;
                    break;
                case 'm':
                case 'M':
                    mul = 6;
                    break;
            }
        }
    }

    if (dec == -1){
        dec = i;
        if(mul === null){
            mul = 0;
        }
    }
    multiplier = parseInt(mul,10) + dec - noofdigit - 2;
    multiplier = multiplier == -3 ? -2 : multiplier;

    if (noofdigit === 0)
        ret = {"band1": getcolor(digit[0]),
                "band2": getcolor(digit[1]),
                "band3": getcolor(multiplier),
                "band4": "",
                "band5": tolcolor(tol)
                };
    else
        ret = {"band1": getcolor(digit[0]),
                "band2": getcolor(digit[1]),
                "band3": getcolor(digit[2]),
                "band4": getcolor(multiplier),
                "band5": tolcolor(tol)
                };
    return ret;
};
