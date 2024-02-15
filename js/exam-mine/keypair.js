//이중루프는탈락!!
//정답은 ts/exam

import assert from "assert"; // ESM
const keyPair = function (arr, target) {
	let tmp = [];
	for (let i = 0; i < arr.length; i += 1) {
		if (arr.includes(target - arr[i])) {
			tmp.push(i);
			tmp.push(arr.indexOf(target - arr[i]));
			return tmp;
		}
	}
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
