import { Age } from "../src/calculator";

describe("Age Calculator Class tests", () => {
  let today = new Date();
  let month =  today.getMonth();
  let date = today.getDate();
  let  tomorrowDate = todayDate;
  let fortyYearsAgo = today.getFullYear() -35;
  let fortyYearsOld = new Age(fortyYearsAgo, month, date);
})