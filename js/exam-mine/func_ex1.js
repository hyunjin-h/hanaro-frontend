// const once = (fn,thisValue) => {
//   let didRun = false;
//
//     ? () => {
//         fn.didRun = true;
//         return fn;
//       }
//     : () => {
//         return;
//       };
// };

const once_org = function (fn, thisValue) {
	let didRun = false;
	return function (...args) {
		if (didRun) return;
		didRun = true;
		return fn.call(thisValue, ...args);
		// return fn.apply(thisValue, args);
		// return fn.bind(thisValue)(...args);
	};
};

const fn = once_org((x, y) => `금일 운행은 ${x},${y}`);

console.log(fn(1, 6));
console.log(fn(1, 6));
console.log(fn(1, 6));
