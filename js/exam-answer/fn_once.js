function once(f) {
	let didRun = false;
	return function (...args) {
		if (didRun) return;
		return (didRun = true), f.apply(this, args);
		// return didRun ? undefined : ((didRun = true), f.appy(this, args));
	};
}

const thisObj1 = { id: 100 };
const thisObj2 = { id: 200 };

function f(x, y) {
	return `끝번호 ${x}, ${y}입니다! ${this.id}`;
}
const fn = once(f);
console.log(fn.call(thisObj1, 1, 6));
console.log(fn.call(thisObj2, 3, 8));
// const once = (f) =>

// const f = (x, y) => `끝번호 ${x}, ${y}입니다! ${this.id}`;

// console.log(f.call(thisObj, 1, 6));
// const fn = once(f.bind(thisObj));
