"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanNumberBuilder_1 = require("./RomanNumberBuilder");
describe("Roman Number Test", function () {
    var rns;
    beforeAll(function (done) {
        rns = new RomanNumberBuilder_1.RomanNumberBuilder().build();
        done();
    });
    test("#getSymbol", function () {
        expect(rns.getSymbols().length).toBeGreaterThan(0);
    });
    test("#toDecimal, valid input", function () {
        expect(rns.toDecimal("V")[0]).toEqual(5);
    });
    test("#toDecimal, valid", function () {
        expect(rns.toDecimal("XV")[0]).toEqual(15);
    });
    test("#toDecimal, valid input", function () {
        expect(rns.toDecimal("XXVXV")[0]).toEqual(30);
    });
    test("#toDecimal, valid input", function () {
        expect(rns.toDecimal("XVAAA")[1]).toBeInstanceOf(Error);
    });
    test("#toDecimal, invalid input", function () {
        expect(rns.toDecimal("12")[1]).toBeInstanceOf(Error);
    });
    test("#toDecimal, invalid input", function () {
        var x = "";
        expect(rns.toDecimal(x)[1]).toBeInstanceOf(Error);
    });
    test("#setAlias", function () {
        rns.setAlias("I", "ANKSO");
        expect(rns.getSymbolFromAlias("ANKSO")[0]).toEqual("I");
        expect(rns.getSymbolFromAlias("INVALID")[1]).toBeInstanceOf(Error);
    });
    test("#getSymbolFromAlias", function () {
        rns.setAlias("I", "ANKSO");
        expect(rns.getSymbolFromAlias("ANKSO")[0]).toEqual("I");
        expect(rns.getSymbolFromAlias("INVALID")[1]).toBeInstanceOf(Error);
    });
    test("#getValueFromSymbol, valid", function () {
        expect(rns.getValueFromSymbol("X")[0]).toEqual(10);
    });
    test("#getValueFromSymbol, invalid", function () {
        expect(rns.getValueFromSymbol("AA")[1]).toBeInstanceOf(Error);
    });
    test("#getAliasFromSymbol, valid", function () {
        rns.setAlias("V", "FIVE");
        expect(rns.getAliasFromSymbol("V")[0]).toEqual("FIVE");
    });
    test("#getAliasFromSymbol, invalid", function () {
        rns.setAlias("V", "FIVE");
        expect(rns.getAliasFromSymbol("VV")[1]).toBeInstanceOf(Error);
    });
    test("#getRomanFromAliasSequence, valid", function () {
        rns.setAlias("V", "FIVE");
        rns.setAlias("X", "TEN");
        expect(rns.getRomanFromAliasSequence("TEN FIVE TEN")[0]).toEqual("XVX");
    });
    test("#getRomanFromAliasSequence, invalid", function () {
        rns.setAlias("V", "FIVE");
        rns.setAlias("X", "TEN");
        expect(rns.getRomanFromAliasSequence("TENN FIVE")[1]).toBeInstanceOf(Error);
    });
    test("#getValueFromAlis", function () {
        rns.setAlias("X", "TEN");
        expect(rns.getValueFromAlias("TEN")[0]).toEqual(10);
    });
    test("#getValueFromAlis", function () {
        expect(rns.getValueFromAlias("RANDOM")[1]).toBeInstanceOf(Error);
    });
});
