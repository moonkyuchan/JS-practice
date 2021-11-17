// Producer
//프로미스를 만드는 순간 엑스큐터가 바로 실행된다 ? 내가 원하지도 않는데 수행해버리니까 주의해~~
const promise = new Promise((resolve, reject) => {
  console.log("하하");
  setTimeout(() => {
    // resolve("리졸브~");
    // reject(new Error("not found"));
  }, 2000);
});

//consumers : then , catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("리졸브 에러 상관없이 난 이 값 뽑을거야~");
  });

const first = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐔`), 1000);
  });

const second = (firstThing) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${firstThing} => 🥚`), 1000);
  });

const third = (secondThing) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${secondThing} => 🥘`), 1000);
  });

first()
  .then((value) => second(value))
  .then((value2) => third(value2))
  .then((result) => console.log(result));
