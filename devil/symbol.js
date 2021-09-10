//Symbol 은 유일한 식별자를 가집니다. -> 유일성 보장
const a = Symbol();
const b = Symbol();

// console.log(a); // symbol()
// console.log(b); // symbol()
// console.log(a === b); // false

let user = {
  name: "moon",
  age: 32,
  [a]: "seoul",
};
// console.log(user);  { name: 'moon', age: 32, [Symbol()]: 'seoul' }

//다른 개발자가 만들어 놓은 객체
let admin = {
  name: "moon",
  age: 32,
};

// 내가 만들어 놓은 객체에 프로퍼티를 추가해야할 때
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};
user[showName]();

//사용자가 접속하면 보이는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}`);
}

// -> 다른사람이 만들어놓은 프로퍼티를 덮어 사용할 필요 없이 사용할 수 있다.
