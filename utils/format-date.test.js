import formatDate from "./format-date";

test("formats a date string to DD/MM/YYYY", () => {
  expect(formatDate("1987-08-11")).toEqual("11/08/1987");
  expect(formatDate).toThrow();
  expect(() => formatDate("This is a string")).toThrow();
});
