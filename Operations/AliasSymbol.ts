import { IOperation } from "./IOperation";
import { RomanNumberService } from "../RomanNumber";
export class AliasSymbol implements IOperation {
  static CMDName: string = "CREATE_ALIAS";

  private aliasName: string = "";
  private romanSymbol: string = "";

  static _regCMD = /^([a-z]+) is (I|V|X|L|C|D|M|])$/g;

  static create(): IOperation {
    return new AliasSymbol();
  }

  static checkCMD(cmd: string): boolean {
    const regexp = new RegExp(AliasSymbol._regCMD);
    return regexp.test(cmd);
  }

  pasre(args: string): Error | undefined {
    const regexp = new RegExp(AliasSymbol._regCMD);
    const exp = regexp.exec(args);
    // @ts-ignore
    this.aliasName = exp[1].trim();
    // @ts-ignore
    this.romanSymbol = exp[2].trim();
    return
  }
  execute(args: string): string {
    this.pasre(args);
    RomanNumberService.setAlias(this.romanSymbol, this.aliasName);
    return "";
  }
  public get operationName(): string {
    return AliasSymbol.CMDName;
  }
}
