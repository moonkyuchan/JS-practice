console.log(add(2, 5));
// console.log(sub(5, 1));  // 함수 표현식은 호이스팅이 크흠.....

//함수선언문
function add(x, y) {
  return x + y;
}

//함수표현식
let sub = function (x, y) {
  return x - y;
};

console.log(add(2, 4));
console.log(sub(5, 3));

//이건 또 모야 매개변수는 arguments에 객체의 프로퍼티로 보관!?!?!?

function add2(x, y) {
  return x + y;
}

add2(2, 7, 9, 10);
