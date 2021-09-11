let num = 10;
let string = num.toString();
let number = num.toString(2);
// console.log(string); // 문자 '10'
// console.log(number); // 2진수 '1010'

//Math 내장객체

//Math.ceil() 올림
let num1 = 5.1;
let num2 = 5.6;

// console.log(Math.ceil(num1)); // 6
// console.log(Math.ceil(num2)); // 6

// Math.floor() 내림
// console.log(Math.floor(num1)); 5
// console.log(Math.floor(num2)); 5

// Math.round() 반올림
// console.log(Math.round(num1)); 5
// console.log(Math.round(num2)); 6

// Math.random() 0~1사이에 무작위 숫자
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100) + 1); // 1~100까지의 무작위 숫자 , +1은 0으로 시작할수있으니

// Math.max() 인수중 최댓값
// console.log(Math.max(1, 2, 4, 5, 6, 7, 10)); 10

// Math.min() 인수중 최솟값
// console.log(Math.min(2, 3, 5, 6, 1)); 1

// Math.abs() 절대값
// console.log(Math.abs(-2)); 2

//Math.pow() 제곱
// console.log(Math.pow(2, 10)); //2의 10승 값

//Math.sqrt() 제곱근
// console.log(Math.sqrt(64)); // 8

// toFixed() 원하는 소수점까지 (주의사항 문자열로 반환하다!!!!!)
let num3 = 26.245334;
// console.log(num3.toFixed(3)); // '26.245'
// console.log(Number(num3.toFixed(1))); 26.2

// parseInt() : Number()와 차이는 문자를 만나면 number는 NaN을 반환하지만 parseInt는 숫자가 보이는건 반환 문자 시작은 X
let numStr = "200px";
let numStr2 = "f3";
// console.log(parseInt(numStr)); 200
// console.log(parseInt(numStr2)); NaN
