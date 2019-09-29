import { RomanNumber } from "./RomanNumber";
import { RomanSymbol } from "./RomanSymbol";
import { IRomanNumber } from "./IRomanNumber";

const romanSymbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}


export class RomanNumberBuilder {
  protected romanNumber: IRomanNumber;
  constructor(romanNumber: IRomanNumber = new RomanNumber()) {
    this.romanNumber = romanNumber;
    // @ts-ignore
    this.romanNumber.setSymbols(Object.keys(romanSymbols).map(key => new RomanSymbol(key, romanSymbols[key])));
  }

  build() {
    return this.romanNumber;
  }

}