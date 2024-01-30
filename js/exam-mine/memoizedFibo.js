//최종순수함수
let finalrunCnt = 0;
function memoized(fn) {
	const memoizedTable = {};
	return function (k) {
		return memoizedTable[k] || (memoizedTable[k] = fn(k));
	};
}
const memoizedFibo = memoized(function (n) {
	finalrunCnt += 1;
	if (n === 0) return 0;
	if (n === 1) return 1;
	return memoizedFibo(n - 1) + memoizedFibo(n - 2);
});
const final_f5 = memoizedFibo(5);
console.log("🚀 ~ final_f5:", final_f5, finalrunCnt);
finalrunCnt = 0;
const final_f7 = memoizedFibo(7);
console.log("🚀 ~ final_f7:", final_f7, finalrunCnt);
