
/* eslint-disable no-undef */
import { Age } from "./../src/calculator";

// These tests are written to pass based on today 35 years ago
describe("Galactic Age Calculator app tests", () => {
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let tomorrowDate = todayDate + 1;
  let thirty5YearsAgo = today.getFullYear() - 40;
  let age = new Age(thirty5YearsAgo, todayMonth, todayDate);
  let forty = age.getAge();
  let ageCalculatorTomorrow  = new Age(thirty5YearsAgo,todayMonth,tomorrowDate);

  describe("Age class tests", () => {
    test("test that it should return 40 for todays date forty years ago", () => {
      expect(forty).toEqual(40);
    });
    test("test should return 39 for tomorrows date forty years ago", () => {
      let tomorrowsAge = ageCalculatorTomorrow.getAge();
      expect(tomorrowsAge).toEqual(39);
    });
  });
});