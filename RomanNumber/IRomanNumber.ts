import { IRomanSymbol } from "./IRomanSymbol"
export interface IRomanNumber {
  getSymbolFromAlias(alias: string): [string | null, Error | null]
  getAliasFromSymbol(symbol: string): [string | null, Error | null]
  getValueFromAlias(alias: string): [number | null, Error | null]
  getValueFromSymbol(alias: string): [number | null, Error | null]
  getRomanFromAliasSequence(aliasSeq: string): [string | null, Error | null]
  toDecimal(roman: string): [number | null, Error | null]
  setSymbols(s: IRomanSymbol[]): any
  getSymbols(): IRomanSymbol[]
  setAlias(symbol: string, alias: string): any
  aliasSequenceToDecimal(aliasSequence: string): [number | null, Error | null]
}