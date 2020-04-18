
import { Age } from "./../src/calculator";

describe( "Age Class tests", () => {
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let tomorrowDate = todayDate + 1;
  let fortyYearsAgo = today.getFullYear() - 40;
  let forty = new Age(fortyYearsAgo, todayMonth, todayDate);
  forty.getAge();
  let stillThirtyNine  = new Age(fortyYearsAgo,todayMonth,tomorrowDate);
  stillThirtyNine.getAge();
  describe("Age class tests", () => {
    test("testing getAge() method that it created the constructor earthAge to be 40 for todays date", () => {
      expect(forty.earthAge).toEqual(40);
    });
    test("testing getAge() method that it created the constructor earthAge to be 39 for tomorrows date", () => {
      expect(stillThirtyNine.earthAge).toEqual(39);
    });
    test("testing getMercurianYears() method, that it created the constructor mercurianAge to be 166", () => {
    forty.getMercurianYears()
    expect(forty.mercurianAge).toEqual(166) 
    });
  });
  
});