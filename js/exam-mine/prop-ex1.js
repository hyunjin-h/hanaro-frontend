const arr = [100, 200, 300, 400, 500, 600, 700];
//1,2
console.log("1,2===================================");
for (indexarr in arr) {
	console.log(indexarr, ":", arr[indexarr]);
}

const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };
//3,4
console.log("3,4===================================");
for (let key in obj) {
	console.log(key, ":", obj[key]);
}
//5
console.log("5===================================");
for (let [, value] of Object.entries(obj)) {
	console.log(value);
}
console.log("6===================================");
//6 - level을 열거되지 않도록 설정
Object.defineProperty(obj, "level", {
	enumerable: false,
});
for (let [key, value] of Object.entries(obj)) {
	console.log(key, ":", value);
}
console.log("7===================================");
//7 - role을 읽기전용으로 설정
Object.defineProperty(obj, "role", {
	writable: false,
});

console.log(Object.getOwnPropertyDescriptors(obj));
