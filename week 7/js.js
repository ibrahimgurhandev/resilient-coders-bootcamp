// class Car {
//   constructor(carBrand, carModel, carPrice, carYear, carColor) {
//     this.brand = carBrand;
//     this.model = carModel;
//     this.price = carPrice;
//     this.year = carYear;
//     this.color = carColor;
//   }
//   cost() {
//     console.log(`This  ${this.brand} ${this.model} costs ${this.price}`);
//   }
//   description() {
//     console.log(` This ${this.brand} ${this.model} is ${this.color}`);
//   }
// }

// let toyotaObject = new Car("Toyata", "Camry", "31,000", "2020", "black");

// class Fighter {
//   constructor(fighterName, fighterAge, fighterHealth, fighterWeapon) {
//     this.name = fighterName;
//     this.age = fighterAge;
//     this.health = fighterHealth;
//     this.weapon = fighterWeapon;
//   }
//   currentHealth() {
//     console.log(`I have ${this.health} health left `);
//   }
//   description() {
//     console.log(` my name is ${this.name} and I am ${this.age}`);
//   }
// }
// let Ibrahim = new Fighter("Ibrahim", 20, "100%", "Gun");

// function Car(brand, model, price, year, color) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.year = year;
//   this.color = color;
//   this.cost = function () {
//     console.log(`This  ${this.brand} ${this.model} costs ${this.price}`);
//   };
//   this.description = function () {
//     console.log(` This ${this.brand} ${this.model} is ${this.color}`);
//   };
// }

// let toyota = new Car("Toyata", "Camry", "31,000", "2020", "black");

class MorningChallenge {
  constructor(a, b) {
    this.firstNum = a;
    this.secondNum = b;
  }
  theMethod = () => firstFunction();
}
let firstFunction = () => finalFunction();
let finalFunction = () => alert(test.firstNum ** test.secondNum);
let test = new MorningChallenge(2, 3);
