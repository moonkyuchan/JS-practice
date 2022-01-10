// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);
// console.log("3");

// //동기적 콜백
// function printNow(print) {
//   print();
// }
// printNow(() => {
//   console.log("콜백함수를 알아보쟈~~");
// });

// function printLater(print, time) {
//   setTimeout(print, time);
// }

// printLater(() => {
//   console.log("비동기적 콜백!");
// }, 2000);

// 콜백지옥 한번 당해볼텨?

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "moon" && password === "kyu") ||
        (id === "kim" && password === "no")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 1500);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "moon" || user === "kim") {
        onSuccess({ name: "moon", role: "admin" });
      } else {
        onError(new Error("byebye"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    console.log(user);
    userStorage.getRoles(
      user,
      (userwithRole) => {
        alert(`Hello ${userwithRole.name} as ${userwithRole.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
