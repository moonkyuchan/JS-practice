// 조건문이야 if .. else if ... else를 많이 사숑하지만 표현식에 대부분 boolean 값일 때 사용을 많이 했던 것 같다.
// switch 문을 많이 사용해보지는 않았지만 표현식이 str이나 numd일때 유용할것 같다.

let month = 3;
let monthName = "";

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  default:
    monthName = "what?!?";
}

console.log(monthName);
