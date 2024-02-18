const arr = [1, 2, 3, 4, 5];

const square_arr = arr.reduce((res, item) => [...res, item ** 2], []);
console.log(square_arr);

function square(array) {
  const res = array.reduce((res, item) => [...res, item ** 2], []);
  return res;
}
function sqrt(array) {
  const res = array.reduce((res, item) => [...res, Math.sqrt(item)], []);
  return res;
}
function cube(array) {
  const res = array.reduce((res, item) => [...res, item ** 3], []);
  return res;
}
// console.log(square(arr));
// console.log(sqrt(arr));
// console.log(cube(arr));
let order = [square, sqrt, cube];
const result = order.reduce((res, fn) => [...res, fn(arr)], []);
console.log(result);
