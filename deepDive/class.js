// 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현!
/* const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHi = function () {
    console.log("hello my name is " + this.name);
  };

  return Person;
})();

const me = new Person("moon");
me.sayHi(); */

//클래스는 함수다! 클래스는 값으로 사용할 수 있는 일급 객체
//1. 무명의 리터럴로 생성가능
//2. 변수나 자료구조(객체,배열) 에 저장 가능
//3. 함수의 매개변수에 전달가능
//4. 함수의 반환값으로 사용가능!

class Person {
  //생성자
  constructor(name) {
    this.name = name;
  }

  //프로토타입 메서드
  sayHi() {
    console.log("my name is " + this.name);
  }

  //정적 메서드
  static sayHello() {
    console.log("hello");
  }
}

const me = new Person("moon");
console.log(me.name);
me.sayHi();
Person.sayHello();

console.dir(Person);
console.log(me);

//----------------------------------------------------------------------------------------------------
// 정적 메서드와 프로토타입 메서드 차이
// 만약 인스턴스 프로퍼티를 참조해야 한다면 프로토타입 메서드를 통해 constructor에 매개변수로 전달
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  cal() {
    return this.width * this.height;
  }
}

const square = new Square(20, 10);
console.log(square.cal());

// 정적 메서드를 사용하면 인스턴스 프로퍼티 참조 필요 없엉

class Num {
  static add(a, b) {
    return a + b;
  }
}

console.log(Num.add(20, 30));
