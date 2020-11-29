import formatNumber from "./format-number";

test("adds thousands separators", () => {
  expect(formatNumber(1000)).toEqual("1,000");
  expect(formatNumber(1000000)).toEqual("1,000,000");
  expect(formatNumber(1000.1001)).toEqual("1,000.1001");
  expect(formatNumber("This is a string")).toEqual("This is a string");
  expect(formatNumber()).toEqual("");
});
