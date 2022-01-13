//객체 리터럴

// const user = {
//   name: "moon",
//   hasOwnProperty: function () {
//     console.log("짜잔");
//   },
// };

// const car = {
//   wheels: 4,
//   drive: function () {
//     console.log("운전해!");
//   },
// };

// const bmw = {
//   color: "red",
//   navigation: true,
// };
// const audi = {
//   color: "black",
// };
// const benz = {
//   color: "green",
// };

// bmw.__proto__ = car;
// audi.__proto__ = car;
// benz.__proto__ = car;

// console.log("bmw :", bmw);
// console.log("color는 원래 갖고있었어~ :", bmw.color);
// console.log("wheels를 상속받아! :", bmw.wheels);

//생성자 함수

// const Car = {
//   wheels: 4,
//   drive: function () {
//     console.log("운전해~~");
//   },
// };

const Bmw2 = function (color) {
  this.color = color;
};

Bmw2.prototype.wheels = 4;
Bmw2.prototype.drive = function () {
  console.log("운전해!");
};

const x5 = new Bmw2("red");
const z4 = new Bmw2("blue");

// x5.__proto__ = Car;
// z4.__proto__ = Car;

console.log("x5:", x5);
console.log("z4:", z4);
