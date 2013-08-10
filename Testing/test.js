test("resistor: Test For Object",function(){
    ok(resistor,"Check for resistor");
    ok(resistor.getColor,"Check for getColor");
});

test("resistor: Test for tolerance 20",function(){
    function match(param,colors,title){
        var obj = {
            'band1':colors[0] || "",
            'band2':colors[1] || "",
            'band3':colors[2] || "",
            'band4':colors[3] || "",
            'band5':colors[4] || ""
        };
        var actual = resistor.getColor(param[0],param[1]||5,param[2]);     
        deepEqual(actual,obj,title);
    }
    match([1,20],["brown","black","gold"],"Value 1");
    match([2,20],["red","black","gold"],"Value 2");
    match([3,20],["orange","black","gold"],"Value 3");
    match([4,20],["yellow","black","gold"],"Value 4");
    match([5,20],["green","black","gold"],"Value 5");
    match([6,20],["blue","black","gold"],"Value 6");
    match([7,20],["violet","black","gold"],"Value 7");
    match([8,20],["grey","black","gold"],"Value 8");
    match([9,20],["white","black","gold"],"Value 9");

});

test("Resistor:Error",function(){
    throws(function(){
        resistor.getColor(0);
    },/resistor: invalid parameter/,"Raise Error contains invalid")
});