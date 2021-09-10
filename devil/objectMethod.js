let keyName = "age";

let user = {
  name: "moon",
  [keyName]: 32, // 계산된 속성명
  [1 + 5]: 6,
};
// console.log(user);

//1 assign 객체 복제
let user2 = Object.assign({ gender: "male" }, user);
// console.log(user2); // { '6': 6, gender: 'male', name: 'moon', age: 32 }

//2 key 배열 반환
let user3 = Object.keys(user);
// console.log(user3); ['6', 'name', 'age]

//3 value 배열 반환
let user4 = Object.values(user);
// console.log(user4); [6, 'moon', 32]

//4 key,value 배열반환
let user5 = Object.entries(user);
// console.log(user5);  [ [ '6', 6 ], [ 'name', 'moon' ], [ 'age', 32 ] ]
