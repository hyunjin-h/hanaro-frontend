const f1_org = function (f, val) {
	return f(val);
};

const f1 = (f, val) => f(val);
f1(console.log, "abc");

function fx1(a) {
	return a ** 2;
}

console.log("::>>", f1(fx1, 2));

const f2_org = function (f) {
	return function (...args) {
		return f(...args);
	};
};
const f2 =
	(f) =>
	(...args) =>
		f(...args);

const X = f2(Math.max);
const result = X(1, 2, 3, 4, 5);
console.log(result);
