function hello(name) {
	// console.log(`Hello, ${name}`, arguments);
	return `Hello, ${name}`;
}
const hi = hello;
hi("Kim"); //주소복사
console.log(hi.length, hi.name);

function printFnReturnValue(fn, nm) {
	console.log("print >>", fn.name, fn(nm));
}
printFnReturnValue(hi, "Lee");
