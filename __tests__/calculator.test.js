import { Age } from "../src/calculator";

describe("Age Calculator Class tests", () => {
  let today = new Date();
  let month =  today.getMonth();
  let date = today.getDate();
  let fortyYearsAgo = today.getFullYear() -35;
  let fortyYearsOld = new Age(fortyYearsAgo, month, date);
  describe("Age.getAge() should return 40 for fortyYearsOld", () => {
    expect(fortyYearsOld.getAge()).toEqual(40);
  });
})