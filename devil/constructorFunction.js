function User(name, age) {
  // 보통 생성자 함수는 첫글자는 대문자로
  // 생성자 함수는 this={} 빈객체를 만들고
  this.name = name;
  this.age = age; // 빈객체에 프로퍼티로 지정후
  // return this // this를 반환합니다.
}

const user1 = new User("moon", 30);
const user2 = new User("kim", 32);
console.log(user1);
console.log(user2);
