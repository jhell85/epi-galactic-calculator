import { Age } from "./../src/calculator";

describe("Age Class tests", () => {
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let tomorrowDate = todayDate + 1;
  let fortyYearsAgo = today.getFullYear() - 40;
  let forty = new Age(fortyYearsAgo, todayMonth, todayDate);
  let stillThirtyNine = new Age(fortyYearsAgo, todayMonth, tomorrowDate);
  
  describe("Age class tests", () => {
    test("testing getAge() method that it created the constructor earthAge to be 40 for todays date", () => {
      forty.getAge();
      expect(forty.earthAge).toEqual(40);
    });
    test("testing getAge() method that it created the constructor earthAge to be 39 for tomorrows date", () => {
      stillThirtyNine.getAge();
      expect(stillThirtyNine.earthAge).toEqual(39);
    });
    test("testing getMercurianYears() method, that it created the constructor mercurianAge to be 166", () => {
      forty.getMercurianYears();
      expect(forty.mercurianAge).toEqual(166);
    });
    test("testing getVenusianYears() method, that it created the constructor venusianAge to be 65", () => {
      forty.getVensianYears();
      expect(forty.vensianAge).toEqual(166);
    });
  });
});
