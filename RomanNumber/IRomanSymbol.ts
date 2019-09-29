export interface IRomanSymbol {
  getSymbol(): string;
  setSymbol(s: string): any;
  getValue(): number;
  setValue(n: number): any;
  getAlias(): string;
  setAlias(a: string): any;
}
