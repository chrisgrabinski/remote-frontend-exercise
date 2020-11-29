import formatDate from "./format-date";

test("format a date to the DD/MM/YYYY format", () => {
  expect(formatDate("1987-08-11")).toEqual("11/08/1987");
  expect(formatDate).toThrow();
  expect(() => formatDate("This is a string")).toThrow();
});
