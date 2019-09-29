import { RomanNumberBuilder } from "./RomanNumberBuilder"

(function T() {
  const x = new RomanNumberBuilder();
  const rs = x.build();

  rs.setAlias("I", "ANKSO");


  console.log(rs.getSymbolFromAlias("ANKSO"));
})()