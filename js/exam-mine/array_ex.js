const assert = require("assert");
const { log } = require("console");
console.log("==============================");
console.log("===========연습문제============");
console.log("==============================");
console.log();
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users_arr = [kim, lee, park];
const addUser = (arg) => [...users_arr, arg];
console.log(addUser(hong));
console.log(users_arr);
const removeUser = (arg) => {
  const idx = users_arr.findIndex((a) => a === arg);
  return [...users_arr.slice(0, idx), ...users_arr.slice(idx + 1)];
};
console.log(removeUser(lee));
const changeUser = (arg, arg2) => {
  const idx = users_arr.findIndex((a) => a === arg);
  return [...users_arr.slice(0, idx), { ...arg2 }, ...users_arr.slice(idx + 1)];
};
console.log(changeUser(kim, hong));

const arr = [1, 2, 3, true];
const ret1 = arr.map(function (element) {
  return `${element}`;
});
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// const namestr = users.reduce(
//   (acc, item) => `${acc}${acc ? " " : ""} ${item.name}`,
//   ""
// );
const classNames = (...args) => {
  const nameres = args.reduce(
    (acc, item) =>
      `${acc}${
        acc.length === 0 || acc[acc.length - 1] === " " ? "" : " "
      }${item}`,
    ""
  );
  return nameres;
};
//누산기의 길이가 0이거나 누산기의 마지막 값이 " "라면 띄어쓰기 없이 item 붙이기
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");
// 주의: ' a b c d  e'면 안됨!!
