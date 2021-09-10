//var
//var는 한번 선언된 변수를 다시 선언 가능,  선언과 초기화가 동시에
var name = "moon";
console.log(name); //moon
var name = "jane";
console.log(name); //jane

//var는 선언하기 전에 사용가능
console.log(name); // undefined
var name = "mike";
/*hoisting 으로 
var name
console.log(name)
name = 'mike';

선언을 가장 위로 할당은 그대로 
 */

//let // 선언과, 초기화를 분리 해서 진행 / 재할당 가능
let name = "moon";
console.log(name);
let name = "jane";
console.log(name);

//그래서 TDZ(Temporal Dead Zone: 선언과 초기화단계의 구간) 가 생김
let a = 30;
function showAge() {
  console.log(a);
  // let a = 20를 여기에 추가하면 let또한 호이스팅이 되면서 에러가 발생
}
showAge(); // 30

//const
const name = "moon"; // const 는 선언, 초기화, 할당을 한번에!!
/*const name 
name = "moon"
이건 불가
*/

/* var는 함수 스코프(식별자에 대한 유효범위) 

if(age>19){
  var txt = "성인"
}
console.log(txt)   성인 출력가능

fucntion add(a,b){
  var result = a+b
}
console.log(result) 에러 !!! var는 함수 스코프이기 때문에!!!!


let, const 는 블록 스코프 
-function add(){
block scope
}

-if(){
block scope
}

{} 내에서만 사용 가능하다
*/
