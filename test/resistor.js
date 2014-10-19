/*global describe, it*/
"use strict";

var resistorColor = require("../");

describe("Resistor color", function(){
    describe("Encoder", function(){
        it("first" ,function(done){
            resistorColor.resistorToColor(1);
            done();
        });

        it("second" ,function(done){
            done();
        });
    });

    describe("Decoder", function(){

    });
});