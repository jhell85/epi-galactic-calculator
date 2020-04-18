export class Age {
  constructor(birthYear, birthMonth, birthDay, smoker) {
    this.year = birthYear;
    this.month = birthMonth;
    this.day = birthDay;
    this.smoker = smoker;
  }

  getAge() {
    let today = new Date();
    let birthDate = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() + 1 - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    this.earthAge = age;
  }
  getMercurianYears() {
    this.mercurianAge = Math.floor(this.earthAge / 0.24);

  }
  getVenusianYears() {
    this.venusianAge = Math.floor(this.earthAge / 0.62);
  }
  getMartianYears() {
    this.martianAge = Math.floor(this.earthAge / 1.88);
  }
  getJovianYears() {
    this.jovianAge = Math.floor(this.earthAge / 11.86);
  }
  getLifeExpectancy() {
    if (this.smoker === true) {
      this.lifeExpectancy = 68;
    } else {
      this.lifeExpectancy = 78;
    }
    let yearsLeft = this.lifeExpectancy - this.earthAge;
    if (yearsLeft >= 0){
      this.olderThenLifeExpectancy =  false;
    } else {
      this.olderThenLifeExpectancy = true;
    }
    this.yearsLeft = Math.abs(yearsLeft);
  }
}
