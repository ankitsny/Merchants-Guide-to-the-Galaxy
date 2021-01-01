import { IRomanNumber } from "./IRomanNumber";
import { IRomanSymbol } from "./IRomanSymbol";


interface myObj {
  property: string;
}


export class RomanNumber implements IRomanNumber {
  private _symbols: IRomanSymbol[] = [];

  getSymbols(): IRomanSymbol[] {
    return this._symbols;
  }

  setSymbols(s: IRomanSymbol[]) {
    this._symbols = s;
  }

  getSymbolFromAlias(alias: string): [string | null, Error | null] {
    let sym = "";
    const flag = this.getSymbols().some(symbol => {
      if (symbol.getAlias() === alias) {
        sym = symbol.getSymbol();
        return true;
      }
    })
    return flag ? [sym, null] : [null, new Error("alias not found!")]
  }

  getAliasFromSymbol(symbol: string): [string | null, Error | null] {
    let alias = "";
    const flag = this.getSymbols().some(_symbol => {
      if (_symbol.getSymbol() === symbol) {
        alias = _symbol.getAlias();
        return true;
      }
    });
    return flag ? [alias, null] : [null, new Error("symbol not found!")]

    // return alias;
  }

  getValueFromAlias(alias: string): [number | null, Error | null] {
    let value: number = 0;
    const flag = this.getSymbols().some(_symbol => {
      if (_symbol.getAlias() === alias) {
        value = _symbol.getValue();
        return true;
      }
    });

    return flag ? [value, null] : [null, new Error("alias not found!")]
  }

  getValueFromSymbol(symbol: string): [number | null, Error | null] {
    let value: number = 0;
    const flag = this.getSymbols().some(_symbol => {
      if (_symbol.getSymbol() === symbol) {
        value = _symbol.getValue();
        return true;
      }
    });

    return flag ? [value, null] : [null, new Error("Symbol not found!")]
  }


  /**
   * 
   * @param aliasSeq - alias sequence space separated, e.g. alias1 alias2 alias3
   */
  getRomanFromAliasSequence(aliasSeq: string): [string | null, Error | null] {
    let romanSequence: string = "";

    const aliasSymbolMap = aliasSeq.split(" ").reduce((accu, alias) => {
      if (alias in accu) return accu;

      const [romanSym, err] = this.getSymbolFromAlias(alias);
      if (err) {
        // alias not found
        // throw error or log it and continue
        // console.log(err);
        return accu;
      }
      // @ts-ignore
      accu[alias] = romanSym;
      return accu;
    }, {});

    if (!aliasSeq
      .split(" ")
      .every(alias => alias in aliasSymbolMap)) {
      return [null, new Error("Some of the alias is missing, please create alias first")]
    }

    romanSequence = aliasSeq.split(" ").map(alias => {
      // @ts-ignore
      return aliasSymbolMap[alias];
    }).join("");

    return [romanSequence, null];
  }


  setAlias(symbol: string, alias: string) {
    for (let _sym of this.getSymbols()) {
      if (_sym.getSymbol() === symbol) {
        _sym.setAlias(alias);
        break;
      }
    }
  }

  aliasSequenceToDecimal(aliasSequence: string): [number | null, Error | null] {
    let [roman, err] = this.getRomanFromAliasSequence(aliasSequence);
    if (err || roman === null) {
      return [null, err];
    }
    let [decimalNo] = this.toDecimal(roman);

    return [decimalNo, null];
  }

  toDecimal(roman: string): [number | null, Error | null] {
    if (!roman) return [null, new Error("Invalid Roman Number")];

    let [num, err] = this.getValueFromSymbol(roman.charAt(0));

    if (err) return [null, err];

    let pre: number, curr: number;

    for (var i = 1; i < roman.length; i++) {
      // @ts-ignore
      [curr, err] = this.getValueFromSymbol(roman.charAt(i));
      if (err) return [null, err];

      // @ts-ignore
      [pre] = this.getValueFromSymbol(roman.charAt(i - 1));

      if (curr <= pre) {
        // @ts-ignore
        num += curr;
      } else {
        // @ts-ignore
        num = num - pre * 2 + curr;
      }
    }
    return [num, null];
  }
}



interface data {
  a: string;
  b: string;
}


