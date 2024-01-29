let arr_ex = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
const obj = {};
function makeObjectFromArray(arr) {
  for (let key in arr) {
    const [k, ...rest] = arr[key];
    obj[k] = rest;
  }
  return obj;
}
const obj_res = makeObjectFromArray(arr_ex);
console.log(obj_res);
console.log("==========================================================");
function makeArrayFromObject(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push([key, ...obj[key]]);
  }
  return arr;
}
const arr_res = makeArrayFromObject(obj_res);
console.log(arr_res);
