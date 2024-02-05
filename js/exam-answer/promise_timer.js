const depthTimer = (depth) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("depth" + depth, new Date());
			if (depth >= 3) {
				reject(new Error("Already 3-depth!"));
			}
			resolve(depth + 1);
		}, depth * 1000);
	});

console.log("Start", new Date());
//1) then 방법
// depthTimer(1)
// 	.then(depthTimer)
// 	.then(depthTimer)
// 	.catch((err) => {
// 		console.error(err);
// 	});
// 2) await 방법
// try {
// 	const r1 = await depthTimer(1);
// 	const r2 = await depthTimer(2);
// 	const r3 = await depthTimer(3);
// } catch (err) {
// 	console.error(err);
// }
//3) for-await-of 방법
