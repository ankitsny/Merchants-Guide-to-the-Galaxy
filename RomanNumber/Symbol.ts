import { IRomanSymbol } from "./ISymbol";
export class RomanSymbol implements IRomanSymbol {

  private _symbol!: string;
  private _value!: number;
  private _alias: string = "";

  constructor(symbol: string, value: number, alias?: string) {
    this._symbol = symbol;
    this._value = value;
    this._alias = alias || "";
  }

  getSymbol(): string {
    return this._symbol;
  }

  setSymbol(s: string) {
    this._symbol = s;
  }

  getValue(): number {
    return this._value;
  }

  setValue(v: number) {
    this._value = v;
  }

  getAlias(): string {
    return this._alias;
  }

  setAlias(a: string) {
    this._alias = a;
  }
}
