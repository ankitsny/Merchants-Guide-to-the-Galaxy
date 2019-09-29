import { IMetal } from "./IMetal";

export class Metal implements IMetal {

  private name: string;
  private worth: number;

  constructor(name: string, worth: number) {
    this.name = name;
    this.worth = worth;
  }

  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getWorth(): number {
    return this.worth;
  }
  setWorth(worth: number) {
    this.worth = worth;
  }

}