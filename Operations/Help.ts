import { IOperation } from "../interfaces/IOperation";

export class Help implements IOperation {
  private opName: string = "HELP";

  static create(): IOperation {
    return new Help();
  }

  pasre(args: string): Error {
    throw new Error("Method not implemented.");
  }

  execute(args: string): string {
    return [
      "Commands Available: ",
      "1. [Alias Name] is I",
      "\tAll Roman Symbols, can be used to set alias for the Roman Symbols",
      "\tUSAGE: 'ALIAS_NAME is X', now the alisa 'ALIAS_NAME' will be treated as 'X'",
      "",
      "2. [glob]...[aliasN] [Silver] is [34] Credits",
      "\tThis command can be used to assign the worth of a Metal",
      "\tUSAGE: 'glob Gold is 100 Credits'",
      "",
      "3. how much is [pish] [tegj] [glob] [glob] ?",
      "\t This command will evaluate the Roman Alias to Decimal Number",
      "",
      "4. how many Credits is [glob] [prok] [METAL] ?",
      "\tThis command return the worth of the metal",
      ""
    ].join("\n");
  }

  public get operationName(): string {
    return this.opName;
  }
}
