import { IOperation } from "./IOperation";
import { RomanNumberService } from "../RomanNumber"
import { MetalService } from "../MetalStore";

export class AssignMetalCredit implements IOperation {
  static CMDName: string = "ASSIGN_METAL_CREDIT";

  // glob glob Silver is 34 Credits


  static _regCMD = new RegExp(/^([a-z\s]+) ([A-Z]{1}[a-z]+){1} is ([0-9]+){1} Credits$/g);

  private symbolAliasSequence: string = "";
  private metalName: string = "";
  private worth: number = 0;

  static create(): IOperation {
    return new AssignMetalCredit();
  }

  static checkCMD(input: string): boolean {
    const regexp = new RegExp(AssignMetalCredit._regCMD);
    return regexp.test(input);
  }

  pasre(args: string): Error | undefined {
    const regexp = new RegExp(AssignMetalCredit._regCMD);
    let exp = regexp.exec(args);
    if (exp === null) {
      // INFO: check not required
      return new Error("Invalid CMD");
    }
    this.symbolAliasSequence = exp[1].trim();
    this.metalName = exp[2].trim();
    this.worth = parseInt(exp[3], 10);
  }

  execute(args: string): string {

    this.pasre(args);

    let [decimalNo, err] = RomanNumberService
      .aliasSequenceToDecimal(this.symbolAliasSequence)

    if (err) return err.toString();
    if (decimalNo === null) return "Invalid Input";

    const unitCost: number = this.worth / decimalNo;
    // store metal
    MetalService.set(this.metalName, unitCost);

    return "";
  }
  public get operationName(): string {
    return AssignMetalCredit.CMDName;
  }
}
