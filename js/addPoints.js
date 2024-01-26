// function addPoints(a, b) {
// 	const aa = a.toString();
// 	const bb = b.toString();
// 	const atemp = aa.split(".");
// 	const btemp = bb.split(".");
// 	const maxlength = atemp[1].length > btemp[1].length ? atemp[1].length : btemp[1].length;
// 	const aaa = Math.floor(a * 10 ** maxlength);
// 	const bbb = Math.floor(b * 10 ** maxlength);
// 	const answer = aaa + bbb;
// 	return answer / 10 ** maxlength;
// }
// console.log(addPoints(0.21354, 0.1));
// console.log(addPoints(0.14, 0.28));
// console.log(addPoints(0.34, 0.226));

// function addPoints2(a, b) {
// 	const aa = a.toString().split(".")[1].length;
// 	const bb = a.toString().split(".")[1].length;
// 	const maxlength = aa > bb ? aa : bb;
// 	const aaa = Math.floor(a * 10 ** maxlength);
// 	const bbb = Math.floor(b * 10 ** maxlength);
// 	const answer = aaa + bbb;
// 	return answer / 10 ** maxlength;
// }
// console.log(addPoints2(0.21354, 0.1));
// console.log(addPoints2(0.14, 0.28));
// console.log(addPoints2(0.34, 0.226));

function getCharLength(x) {
	return (x ?? 0).toString().length;
}
function addPoints3(a, b) {
	const len = Math.max(getCharLength(a), getCharLength(b));
	const ret = +(a + b).toFixed(len - 2);
	console.log(ret);
}
addPoints3(0.21354, 0.1);
addPoints3(0.14, 0.28);
addPoints3(0.34, 0.226);
