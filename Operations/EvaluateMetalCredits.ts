import { IOperation } from "../interfaces/IOperation";

export class EvaluateMetalCredits implements IOperation {
  private opName: string = "EVALUATE_METAL_CREDturIT";

  static create(): IOperation {
    return new EvaluateMetalCredits();
  }

  pasre(args: string): Error {
    throw new Error("Method not implemented.");
  }

  execute(args: string): string {
    throw new Error("Method not implemented.");
  }

  public get operationName(): string {
    return this.opName;
  }
}
