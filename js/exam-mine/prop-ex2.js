let arr = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
const obj = {};
function makeObjectFromArray(arr) {
  for (let key in arr) {
    //   console.log(arr[key]);
    const [k, ...rest] = arr[key];
    obj[k] = rest;
  }
  console.log(obj);
}
makeObjectFromArray(arr);
