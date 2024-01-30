// const once = (fn) => {
//   fn.didRun === false
//     ? () => {
//         fn.didRun = true;
//         return fn;
//       }
//     : () => {
//         return;
//       };
// };

const once_org = function (fn) {
  let didRun = false;
  return function () {
    if (didRun) return;
    didRun = true;
    return fn;
  };
};

const fn = once_org((x, y) => `금일 운행은 ${x},${y}`);

console.log(fn(1, 6));
console.log(fn(1, 6));
console.log(fn(1, 6));
