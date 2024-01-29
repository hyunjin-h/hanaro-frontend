//O(N)
let runCnt = 0;
function factorialBeforeMemoization(n) {
	runCnt += 1;
	if (n === 1) return 1;
	return n * factorialBeforeMemoization(n - 1);
}

const f3 = factorialBeforeMemoization(3);
console.log("🚀 ~ f3:", f3, runCnt);
runCnt = 0;
const f5 = factorialBeforeMemoization(5, runCnt);
console.log("🚀 ~ f5:", f5, runCnt);

//O(logn)=>sideeffect 있는 비순수함수
const memoizedTable = {};
runCnt = 0;
function factorial(n) {
	runCnt += 1;
	if (n === 1) return 1;
	return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}
const mf3 = factorial(3);
console.log("🚀 ~ mf3:", mf3, runCnt);
runCnt = 0;
const mf5 = factorial(5, runCnt);
console.log("🚀 ~ mf5:", mf5, runCnt);
console.log("===================================");

//최종순수함수
let finalrunCnt = 0;
function memoized(fn) {
	const memoizedTable = {};
	return function (k) {
		// if (memoizedTable[k])
		//     return memoizedTable[k];
		// return (memoizedTable[k] = fn(k));
		return memoizedTable[k] || (memoizedTable[k] = fn(k));
	};
}
const memoizedFactorial = memoized(function (n) {
	finalrunCnt += 1;
	if (n === 1) return 1;
	return n * memoizedFactorial(n - 1);
});
const final_f3 = memoizedFactorial(3);
console.log("🚀 ~ final_f3:", final_f3, finalrunCnt);
finalrunCnt = 0;
const final_f5 = memoizedFactorial(5);
console.log("🚀 ~ final_f5:", final_f5, finalrunCnt);
