"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanSymbol_1 = require("./RomanSymbol");
describe("Symbol", function () {
    var rs;
    beforeAll(function (done) {
        rs = new RomanSymbol_1.RomanSymbol("X", 10, "TEN");
        done();
    });
    test("#getSymbol", function () {
        expect(rs.getSymbol()).toEqual("X");
    });
    test("#setSymbol", function () {
        rs.setSymbol("V");
        expect(rs.getSymbol()).toEqual("V");
    });
    test("#getValue", function () {
        rs.setValue(5);
        rs.setSymbol("V");
        expect(rs.getValue()).toEqual(5);
    });
    test("#setValue", function () {
        rs.setValue(10);
        rs.setSymbol("X");
        expect(rs.getValue()).toEqual(10);
    });
    test("#getValue", function () {
        rs.setValue(5);
        rs.setSymbol("V");
        rs.setAlias("FIVE");
        expect(rs.getAlias()).toEqual("FIVE");
    });
});
