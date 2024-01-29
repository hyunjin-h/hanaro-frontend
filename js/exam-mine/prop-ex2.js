let arr = [
	["A", 10, 20],
	["B", 30, 40],
	["C", 50, 60, 70],
];
const obj = {};
// function makeObjectFromArray(arr) {}
for (let key in arr) {
	obj[arr[key][0]] = [...arr[key]];
}
console.log(obj);
