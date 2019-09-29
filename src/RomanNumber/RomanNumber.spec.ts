import { RomanNumberBuilder } from "./RomanNumberBuilder"
import { IRomanNumber } from "./IRomanNumber";

describe("Roman Number Test", () => {
  let rns: IRomanNumber;
  beforeAll((done) => {
    rns = new RomanNumberBuilder().build();
    done();
  })

  test("#getSymbol", () => {
    expect(rns.getSymbols().length).toBeGreaterThan(0)
  })

  test("#toDecimal, valid input", () => {
    expect(rns.toDecimal("V")[0]).toEqual(5);
  })

  test("#toDecimal, valid", () => {
    expect(rns.toDecimal("XV")[0]).toEqual(15);
  })

  test("#toDecimal, valid input", () => {
    expect(rns.toDecimal("XXVXV")[0]).toEqual(30);
  })

  test("#toDecimal, valid input", () => {
    expect(rns.toDecimal("XVAAA")[1]).toBeInstanceOf(Error);
  })

  test("#toDecimal, invalid input", () => {
    expect(rns.toDecimal("12")[1]).toBeInstanceOf(Error)
  })
  test("#toDecimal, invalid input", () => {
    let x: string = "";
    expect(rns.toDecimal(x)[1]).toBeInstanceOf(Error)
  })

  test("#setAlias", () => {
    rns.setAlias("I", "ANKSO");
    expect(rns.getSymbolFromAlias("ANKSO")[0]).toEqual("I");
    expect(rns.getSymbolFromAlias("INVALID")[1]).toBeInstanceOf(Error);
  })
  test("#getSymbolFromAlias", () => {
    rns.setAlias("I", "ANKSO");
    expect(rns.getSymbolFromAlias("ANKSO")[0]).toEqual("I");
    expect(rns.getSymbolFromAlias("INVALID")[1]).toBeInstanceOf(Error);
  })
  test("#getValueFromSymbol, valid", () => {
    expect(rns.getValueFromSymbol("X")[0]).toEqual(10);
  })
  test("#getValueFromSymbol, invalid", () => {
    expect(rns.getValueFromSymbol("AA")[1]).toBeInstanceOf(Error);
  })

  test("#getAliasFromSymbol, valid", () => {
    rns.setAlias("V", "FIVE");
    expect(rns.getAliasFromSymbol("V")[0]).toEqual("FIVE")
  })

  test("#getAliasFromSymbol, invalid", () => {
    rns.setAlias("V", "FIVE");
    expect(rns.getAliasFromSymbol("VV")[1]).toBeInstanceOf(Error)
  })

  test("#getRomanFromAliasSequence, valid", () => {
    rns.setAlias("V", "FIVE");
    rns.setAlias("X", "TEN");
    expect(rns.getRomanFromAliasSequence("TEN FIVE TEN")[0]).toEqual("XVX")
  })

  test("#getRomanFromAliasSequence, invalid", () => {
    rns.setAlias("V", "FIVE");
    rns.setAlias("X", "TEN");
    expect(rns.getRomanFromAliasSequence("TENN FIVE")[1]).toBeInstanceOf(Error)
  })


  test("#getValueFromAlis", () => {
    rns.setAlias("X", "TEN");
    expect(rns.getValueFromAlias("TEN")[0]).toEqual(10);
  })

  test("#getValueFromAlis", () => {
    expect(rns.getValueFromAlias("RANDOM")[1]).toBeInstanceOf(Error);
  })

  test("#aliasSequenceToBinary", () => {
    rns.setAlias("X", "TEN");
    expect(rns.aliasSequenceToDecimal("TEN TEN")[0]).toEqual(20);
  })

  test("#aliasSequenceToBinary", () => {
    rns.setAlias("X", "TEN");
    expect(rns.aliasSequenceToDecimal("TEN INVALID")[1]).toBeInstanceOf(Error);
  })
})