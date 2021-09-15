let num = [2, 5, 1, 8, 3, 9];

//sort() 말 그대로 정렬... 함수를 받는다
// let result = num.sort();
// console.log(result); // [1,2,3,5,8,9]

let num2 = [21, 13, 4, 37, 9, 80];
// let result = num2.sort((a, b) => {
//   return a - b;
// });
// console.log(result);

//reduce()
let num3 = [1, 6, 7, 2, 4, 5, 6, 4];

//총합은? forEach를 사용해도 되지만
// let result = 0;
// num3.forEach((num) => {
//   result += num;
// });
// console.log(result);

//reduce(fn)를 사용하면
// let result = num3.reduce((prev, cur) => {
//   return (prev += cur);
// }, 0); // optional로 초기값 지정 해줄 수 있지만 없다면 가정 첫번째 인덱스
// console.log(result);

let userList = [
  { name: "mike", age: 32 },
  { name: "moon", age: 3 },
  { name: "sue", age: 21 },
  { name: "kim", age: 14 },
  { name: "chol", age: 56 },
];

// let result = userList.reduce((prev, cur) => {
//   if (cur.age > 19) {
//     prev.push(cur.name);
//   }
//   return prev;
// }, []);

// console.log(result); //['mike','sue','chio']

// let result = userList.reduce((prev, cur) => {
//   if (cur.name.length === 3) {
//     prev.push(cur.name);
//   }
//   return prev;
// }, []);
// console.log(result); //['sue','kim']
