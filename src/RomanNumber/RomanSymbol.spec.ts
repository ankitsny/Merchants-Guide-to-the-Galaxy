import { IRomanSymbol } from "./IRomanSymbol";
import { RomanSymbol } from "./RomanSymbol";
describe("Symbol", () => {
  let rs: IRomanSymbol
  beforeAll((done) => {
    rs = new RomanSymbol("X", 10, "TEN");
    done();
  })

  test("#getSymbol", () => {
    expect(rs.getSymbol()).toEqual("X")
  })

  test("#setSymbol", () => {
    rs.setSymbol("V")
    expect(rs.getSymbol()).toEqual("V")
  })

  test("#getValue", () => {
    rs.setValue(5);
    rs.setSymbol("V")
    expect(rs.getValue()).toEqual(5)
  })

  test("#setValue", () => {
    rs.setValue(10);
    rs.setSymbol("X")
    expect(rs.getValue()).toEqual(10)
  })

  test("#getValue", () => {
    rs.setValue(5);
    rs.setSymbol("V")
    rs.setAlias("FIVE")
    expect(rs.getAlias()).toEqual("FIVE")
  })

})