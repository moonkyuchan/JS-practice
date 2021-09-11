let string = "문규찬";
// console.log(string[0]); // 문자열도 배열처럼 인덱스로 접근 가능 , 변경은 불가

let string2 = "Hi my name is Moon";

//toLocaleUpperCase() 영어를 대문자로
// console.log(string2.toLocaleUpperCase());
//toLocaleLowerCase() 영어를 소문자로
// console.log(string2.toLocaleLowerCase());

// indexof 문자열 몇번째 인지
// console.log(string2.indexOf("is")); // 0부터 시작 11번째에
/* -찾고자 하는게 없으면 -1을 반환

if (string2.indexOf("Hi") > -1) {
  console.log("Hi가 포함된 문장입니다.");
}

Hi는 0이기 때문에 조건문 실행 X
-1보다 커야 조건문 실행가능
 */

let string3 = "abcdefg";

//str.slice(x,n) x부터 n까지 문자 반환, n이 음수이면 끝에서부터
// console.log(string3.slice(2)); // 'cdefg'
// console.log(string3.slice(0, 3)); // 'abc'
// console.log(string3.slice(1, -2)); // 'bcde'

// substr(n,m) n부터 m개! 를 가져완다.
// console.log(string3.substr(1, 3)); 'bcd'

let string4 = "  hi kyu chan     ";
// trim() 맨앞뒤 공백제거 , 누군가에게 입력값받을때
// console.log(string4.trim());

// repeat(n) n번 반복
// console.log(string3.repeat(3)); // 'abcdefgabcdefgabcdefg'

let list = [
  "01. 문규찬",
  "02. 문규찬2",
  "03. 문규찬3",
  "04. 문규찬4",
  "05. 문규찬5",
];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}
// console.log(newList); //[ '규찬', '규찬2', '규찬3', '규찬4', '규찬5' ]

// includes 문자가 있으면 true 없으면 false

function test(str) {
  if (str.includes("규찬")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}
test("나는 구찬이야");
test("나는 규찬이야");
test("나는 기찬이야");
