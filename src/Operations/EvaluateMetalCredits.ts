import { IOperation } from "./IOperation";
import { RomanNumberService } from "../RomanNumber";
import { MetalService } from "../MetalStore";

/**
 * command to evalute the metals worth
 * input `how many Credits is glob prok Silver ?` 
 */
export class EvaluateMetalCredits implements IOperation {
  static CMDName: string = "EVALUATE_METAL_CREDIT";

  static _regCMD = /^how many Credits is ([a-z ]+)([A-Z]{1}[a-z]+){1} \?$/;

  static create(): IOperation {
    return new EvaluateMetalCredits();
  }

  static checkCMD(input: string): boolean {
    const regexp = new RegExp(EvaluateMetalCredits._regCMD);
    return regexp.test(input);
  }

  private metal: string = "";
  private aliasSequence: string = "";

  pasre(args: string): Error | undefined {
    const regexp = new RegExp(EvaluateMetalCredits._regCMD);
    const exp = regexp.exec(args);
    // @ts-ignore
    this.aliasSequence = exp[1].trim();
    // @ts-ignore
    this.metal = exp[2].trim();
    return;
  }

  execute(args: string): string {
    this.pasre(args);
    let [quantity, err] = RomanNumberService.aliasSequenceToDecimal(this.aliasSequence);

    if (err) return err.toString()
    if (quantity === null) return "Invalid quantity"
    let worth = MetalService.getWorth(this.metal, quantity)
    return `${this.aliasSequence} ${this.metal} is ${worth} Credits`;
  }

  public get operationName(): string {
    return EvaluateMetalCredits.CMDName;
  }
}
