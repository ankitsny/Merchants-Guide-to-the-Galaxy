"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Metal_1 = require("./Metal");
describe("Metal Class", function () {
    var metal;
    beforeAll(function () {
        metal = new Metal_1.Metal("Gold", 38000);
    });
    test("#getName", function () {
        metal.setName("Gold");
        expect(metal.getName()).toEqual("Gold");
    });
    test("#setName", function () {
        metal.setName("Silver");
        expect(metal.getName()).toEqual("Silver");
    });
    test("#getWorth and #setWorth", function () {
        metal.setWorth(1000);
        expect(metal.getWorth()).toEqual(1000);
    });
});
