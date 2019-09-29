import { IOperation } from "./IOperation";
import { RomanNumberService } from "../RomanNumber";

/**
 * command to evaluate decimal from alias sequence
 * e.g. `how much is pish tegj glob glob ?`
 */
export class EvaluateAliasValues implements IOperation {
  static CMDName: string = "EVALUATE_SYMBOL";

  static _regCMD = /^how much is ([a-z ]+) \?$/g

  static create(): IOperation {
    return new EvaluateAliasValues();
  }

  static checkCMD(input: string): boolean {
    const regexp = new RegExp(EvaluateAliasValues._regCMD);
    return regexp.test(input);
  }

  private aliasSequence: string = "";

  pasre(args: string): Error | undefined {
    const regexp = new RegExp(EvaluateAliasValues._regCMD);
    const exp = regexp.exec(args);
    // @ts-ignore
    this.aliasSequence = exp[1].trim();
    return
  }

  execute(args: string): string {
    this.pasre(args);

    let [decimalNo, err] = RomanNumberService
      .aliasSequenceToDecimal(this.aliasSequence);

    if (err) return err.toString();

    return `${this.aliasSequence} is ${decimalNo}`;
  }

  public get operationName(): string {
    return EvaluateAliasValues.CMDName;
  }
}
