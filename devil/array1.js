let arr = [1, 2, 3, 4, 5];

// splice(n,m,x) 인덱스 n번째부터 m개를 지운다. 그 자리에 x를 채운다.
// arr.splice(1, 2, 100, 200);
// console.log(arr); // [1,100,200,4,5]

// splice는 삭제된 요소를 배열로 반홚한다.
// let result = arr.splice(0, 2);
// console.log(result); // 1,2

// slice(n,m) n부터 m번째 앞까지 배열 반환
// let result = arr.slice(1, 4);
// console.log(result); // [2,3,4]

// concat([a,b],c) 합쳐서 배열로 반환
// let result = arr.concat([6, 7], [8, 9]);
// console.log(result); // [1,2,3,4,5,6,7,8,9]

//forEach(()=>{}) 를 이용해 배열을 순회할 수 있다.
// let arr2 = ["moon", "kyu", "chan"];
// let array = [];
// arr2.forEach((name, index) => {
//   if (name.length >= 4) {
//     array.push(name);
//   }
// });
// console.log(array); // ['moon', 'chan']

// indexOf(n,m) n번째부터 시작해서 m 요소를 반환
// let result = arr.indexOf(3);
// console.log(result); // 3은 인덱스 2번째 이기 때문에 2를 반환!!!!!

// includes() 인덱스는 필요없고 포함하는지만 알고싶으면 (블리언값)
// let result = arr.includes(2);
// console.log(result); // true

// find(fn) 첫번째 true 값만 반화하고 끝! 없으면 undefined
// let result = arr.find((item) => {
// return item % 2 === 0;
// });
// console.log(result); // [1,2,3,4,5] 중에 첫번재 true 는 2! 2만 반환하고 끝!

let user = [
  {
    name: "moon",
    age: 30,
  },
  {
    name: "lee",
    age: 17,
  },
  {
    name: "park",
    age: 21,
  },
];

// let result = user.find((item) => {
//   if (item.age <= 19) {
//     return true;
//   }
//   return false;
// });
// console.log(result); // {name:'lee', age:17}

// filter() 만족하는 모든 요소를 배열로 반환!!
// let result = user.filter((item) => {
//   if (item.age >= 20) {
//     return item;
//   }
// });
// console.log(result);

// map() 어떤 기능을 수행하고 배열로 반환
// let result = user.map((user) => {
//   return Object.assign({}, user, {
//     isAdult: user.age > 19,
//   });
// });
// console.log(result);
/*[{ name: 'moon', age: 30, isAdult: true },
  { name: 'lee', age: 17, isAdult: false },
  { name: 'park', age: 21, isAdult: true }
]*/
