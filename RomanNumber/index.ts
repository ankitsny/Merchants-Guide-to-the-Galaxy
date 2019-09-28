import { RomanNumberBuilder } from "./RomanNumberBuilder"
import { RSA_X931_PADDING } from "constants";

(function T() {
  const x = new RomanNumberBuilder();
  const rs = x.build();

  rs.setAlias("I", "ANKSO");


  console.log(rs.getSymbolFromAlias("ANKSO"));
})()