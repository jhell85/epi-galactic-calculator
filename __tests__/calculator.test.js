import { Age } from "./../src/calculator";

describe("Age Class tests", () => {
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let tomorrowDate = todayDate + 1;
  let fortyYearsAgo = today.getFullYear() - 40;
  let forty = new Age(fortyYearsAgo, todayMonth, todayDate);
  let stillThirtyNine = new Age(fortyYearsAgo, todayMonth, tomorrowDate, false);

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
  test("testing getVenusianYears() method, that it created the constructor venusianAge to be 64", () => {
    forty.getVenusianYears();
    expect(forty.venusianAge).toEqual(64);
  });
  test("testing getMartianYears() method, that it created the constructor martianAge to be 21", () => {
    forty.getMartianYears();
    expect(forty.martianAge).toEqual(21);
  });
  test("testing getJovianYears() method, that it created the constructor JovianAge to be 3", () => {
    forty.getJovianYears();
    expect(forty.jovianAge).toEqual(3);
  });
  test("testing getLifeExpectancy() method, that the lifeExpectancy constructor is is 78 if the smoker constructor is false", () => {
    forty.getLifeExpectancy();
    expect(forty.lifeExpectancy).toEqual(78);
  });
  test("testing getLifeExpectancy() method, that the lifeExpectancy constructor is is 68 if the smoker constructor is true", () => {
    forty.smoker = true;
    forty.getLifeExpectancy();
    expect(forty.lifeExpectancy).toEqual(68);
  });
  test("testing getLifeExpectancy() method, that the yearsLeft constructor is is 28, the olderThenLifeExpectancy constructor is false", () => {
    expect(forty.yearsLeft).toEqual(28);
    expect(forty.olderThenLifeExpectancy).toBeFalsy()
  });
  test("testing getLifeExpectancy() method, that the yearsLeft constructor is is 22, the olderThenLifeExpectancy constructor is true", () => {
    let oneHundredYearsAgo = fortyYearsAgo -60;
    let oneHundred = new Age(oneHundredYearsAgo, todayMonth, todayDate, false);
    oneHundred.getAge();
    oneHundred.getLifeExpectancy()
    expect(oneHundred.yearsLeft).toEqual(22);
    expect(oneHundred.olderThenLifeExpectancy).toBeTruthy()
  });
});
