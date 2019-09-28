import { readFileSync } from "fs";
import { resolve } from "path";

import { IOperationMode } from "./IOperationMode";
import { IOperationManager } from "../interfaces/IOperationManager";
import { OperationManager } from "../Operations/OperationManager";

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

    const output = this.fileContents.split("\n").map(input => {
      return this.operationManager.execute(input);
    });

    // Print the result
    console.log(output.join("\n"));

    this.exit(0);
  }

  exit(code: number = 0) {
    console.log("Exiting...");
    process.exit(code);
  }
}
