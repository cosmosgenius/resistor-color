test("resistor: Test For Object",function(){
    ok(resistor,"Check for resistor");
    ok(resistor.resistorToColor,"Check for getColor");
});

function match(param,colors,title){
    var obj = {
        'band1':colors[0] || "",
        'band2':colors[1] || "",
        'band3':colors[2] || "",
        'band4':colors[3] || "",
        'band5':colors[4] || ""
    };
    var actual = resistor.resistorToColor(param[0],param[1]||5,param[2]);
    deepEqual(actual,obj,title);
}

test("resistor: Test for tolerance 20",function(){
    match([1,20],["brown","black","gold"],"Value 1");
    match([9,20],["white","black","gold"],"Value 9");

    match([10,20],["brown","black","black"],"Value 10");
    match([19,20],["brown","white","black"],"Value 19");

    match([90,20],["white","black","black"],"Value 91");
    match([99,20],["white","white","black"],"Value 99");

    match([100,20],["brown","black","brown"],"Value 100");
    match([999,20],["white","white","brown"],"Value 999");
    match([1000,20],["brown","black","red"],"Value 1000");
    match([9999,20],["white","white","red"],"Value 9999");

    match([0.1,20],["brown","black","silver"],"Value 0.1");
    match([0.9,20],["white","black","silver"],"Value 0.9");

    match([0.19,20],["brown","white","silver"],"Value 0.19");

    match([0.99,20],["white","white","silver"],"Value 0.99");

    match([0.999,20],["white","white","silver"],"Value 0.999");

    match([0.9999,20],["white","white","silver"],"Value 0.9999");

    match([1.1,20],["brown","brown","gold"],"Value 1.1");
    match([1.9,20],["brown","white","gold"],"Value 1.9");

    match([1.19,20],["brown","brown","gold"],"Value 1.19");

    match([1.99,20],["brown","white","gold"],"Value 1.99");

    match([1.999,20],["brown","white","gold"],"Value 1.999");

    match([1.9999,20],["brown","white","gold"],"Value 1.9999");

});

test("Resistor: k mul tol 20",function(){
    match(['1K',20],["brown","black","red"],"Value 1K");
    match(['9K',20],["white","black","red"],"Value 9K");

    match(['10k',20],["brown","black","orange"],"Value 10k");
    match(['19k',20],["brown","white","orange"],"Value 19k");

    match(['90k',20],["white","black","orange"],"Value 91k");
    match(['99k',20],["white","white","orange"],"Value 99k");

    match(['100k',20],["brown","black","yellow"],"Value 100k");
    match(['999k',20],["white","white","yellow"],"Value 999k");

    match(['1000k',20],["brown","black","green"],"Value 1000k");
    match(['9999k',20],["white","white","green"],"Value 9999k");

    match(['0.1K',20],["brown","black","brown"],"Value 0.1K");
    match(['0.9K',20],["white","black","brown"],"Value 0.9K");

    match(['0.19k',20],["brown","white","brown"],"Value 0.19k");

    match(['0.99k',20],["white","white","brown"],"Value 0.99k");

    match(['0.999k',20],["white","white","brown"],"Value 0.999k");

    match(['0.9999k',20],["white","white","brown"],"Value 0.9999k");

    match(['1.1K',20],["brown","brown","red"],"Value 1.1K");
    match(['1.9K',20],["brown","white","red"],"Value 1.9K");

    match(['1.19k',20],["brown","brown","red"],"Value 1.19k");

    match(['1.99k',20],["brown","white","red"],"Value 1.99k");

    match(['1.999k',20],["brown","white","red"],"Value 1.999k");

    match(['1.9999k',20],["brown","white","red"],"Value 1.9999k");
});

test("Resistor: M mul tol 20",function(){
   
    match(['1m',20],["brown","black","green"],"Value 1m");
    match(['9m',20],["white","black","green"],"Value 9m");

    match(['10m',20],["brown","black","blue"],"Value 10m");
    match(['19m',20],["brown","white","blue"],"Value 19m");

    match(['90m',20],["white","black","blue"],"Value 90m");
    match(['99m',20],["white","white","blue"],"Value 99m");

    match(['100m',20],["brown","black","violet"],"Value 100m");
    match(['999m',20],["white","white","violet"],"Value 999m");

    match(['1000m',20],["brown","black","grey"],"Value 1000m");
    match(['9999m',20],["white","white","grey"],"Value 9999m");

    match(['0.1m',20],["brown","black","yellow"],"Value 0.1m");
    match(['0.9m',20],["white","black","yellow"],"Value 0.9m");

    match(['0.19m',20],["brown","white","yellow"],"Value 0.19m");

    match(['0.99m',20],["white","white","yellow"],"Value 0.99m");

    match(['0.999m',20],["white","white","yellow"],"Value 0.999m");

    match(['0.9999m',20],["white","white","yellow"],"Value 0.9999m");

    match(['1.1m',20],["brown","brown","green"],"Value 1.1m");
    match(['1.9m',20],["brown","white","green"],"Value 1.9m");

    match(['1.19m',20],["brown","brown","green"],"Value 1.19m");

    match(['1.99m',20],["brown","white","green"],"Value 1.99m");

    match(['1.999m',20],["brown","white","green"],"Value 1.999m");

    match(['1.9999m',20],["brown","white","green"],"Value 1.9999m");
});

test("Resistor:Error",function(){
    throws(function(){
        resistor.getColor(0);
    },/resistor: invalid parameter/,"Raise Error contains invalid");
});