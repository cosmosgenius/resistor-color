(function (exports){

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
    function getToleranceColor(tol){
        //Return Color for tolarance value
        
        var tolerance_color={
            '5':'gray',
            '10':'violet',
            '25':'blue',
            '50':'green',
            '100':'brown',
            '200':'red',
            '500':'gold',
            '1000':'silver',
            '2000':''
        };
        var val = parseInt(tol * 100,10);

        if(tolerance_color[val]){
            return tolerance_color[val];
        }
        return '-1';
    }

    /**
     * Return the color bands
     * @param  {String}     resistor_value resistor value
     * @param  {double}     tol      tolerance value
     * @param  {interger}   mul      multiplier([0,3,6])
     * @return {Dict object}         band color
     */
    exports.getColor = function (resistor_value, tol, mul){
        if (!resistor_value){
            console.error("resistor: input parameter is " + resistor_value);
            return;
        }
        resistor_value = String(resistor_value).replace(/^0*/,'');
        tol = tol || 5;
        mul = mul || null;
        
        digit = [0, 0, 0];
        dec = -1;
        noofdigit = parseInt(tol,10) > 2 ? 0 : 1;
        i = 0;
        dot_mul_re = /^[0-9]*\.[0-9]+[kKmMrR]$/;
        mul_re = /^[0-9]*[kKmMrR][0-9]+$/;

        if (dot_mul_re.test(resistor_value)){
            mul_char = resistor_value[resistor_value.length - 1];
            resistor_value = resistor_value.replace(mul_char, '');
            resistor_value = resistor_value.replace('.', mul_char);
        }

        if (mul_re.test(resistor_value))
            mul = null;

        resistor_value = resistor_value.match(/[1-9]+.*$/)[0];

        for(var j = 0; j < resistor_value.length; ++j){
            if (resistor_value[j].match(/[0-9]/) !== null){
                if(i < 3)
                    digit[i] = parseInt(resistor_value[j], 10);
                i++;
            }else if(mul === null){
                dec = i;
                switch(resistor_value[j]){
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
                    "band5": getToleranceColor(tol)
                    };
        else
            ret = {"band1": getcolor(digit[0]),
                    "band2": getcolor(digit[1]),
                    "band3": getcolor(digit[2]),
                    "band4": getcolor(multiplier),
                    "band5": getToleranceColor(tol)
                    };
        return ret;
    };

})(typeof exports === "undefined" ?this['resistor'] = {}:exports);
