

export class Age {
  constructor(birthYear, birthMonth, birthDay){
    this.year = birthYear;
    this.month = birthMonth;
    this.day = birthDay;
  }

  getAge(){
    let today = new Date();
    let birthDate = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = (today.getMonth() + 1) - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
     this.earthAge = age;
  }


}