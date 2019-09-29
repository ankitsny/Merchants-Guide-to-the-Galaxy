import { readFileSync } from "fs";
import { resolve } from "path";

import { IOperationMode } from "./IOperationMode";
import { IOperationManager } from "../Operations/IOperationManager";

export class FileOperationMode implements IOperationMode {
  private filePath: string;
  private fileContents: string = "";
  private operationManager: IOperationManager;

  static readFile(path: string): string {
    try {
      return readFileSync(resolve(path), {
        encoding: "utf-8"
      });
    } catch (error) {
      throw error;
    }
  }

  constructor(filePath: string, operationManger: IOperationManager) {
    this.filePath = filePath;
    this.operationManager = operationManger;
  }

  run() {
    this.fileContents = FileOperationMode.readFile(this.filePath);
    if (!this.fileContents) {
      console.log("File is empty!");
      this.exit(0);
    }

    const output: string[] = [];
    for (let cmd of this.fileContents.split("\n")) {
      if (cmd === "") continue;
      const out = this.operationManager.execute(cmd);
      output.push(out);
    }

    // Print the result
    console.log(output.filter(out => !!out).join("\n"));

    this.exit(0);
  }

  exit(code: number = 0) {
    // console.log("Exiting...");
    process.exit(code);
  }
}
