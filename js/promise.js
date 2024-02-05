// import { rand } from "./utils/index.js";
// const randtime = new Promise((resolve) => {
// 	const sec = rand(1, 4) * 500;
// 	setTimeout(() => resolve(sec), sec);
// });

// const randTime = () =>
// 	new Promise((resolve) => {
// 		const sec = rand(1, 4) * 500;
// 		setTimeout(() => {
// 			console.log("sec=", sec);
// 			resolve(sec);
// 		}, sec);
// 	});

// const isParellel = true;
// console.time("promi");
// if (isParellel) {
// 	Promise.all([randTime(), randTime(), randTime()]).then(() => console.timeEnd("promi"));
// } else {
// 	randTime()
// 		.then((x) => {
// 			return randTime();
// 		})
// 		.then((x) => {
// 			return randTime();
// 		})
// 		.then((x) => {
// 			return randTime();
// 		})
// 		.then(() => console.timeEnd("promi"));
// }

// setTimeout(function () {
// 	console.log("depth1", new Date());
// 	setTimeout(function () {
// 		console.log("depth2", new Date());
// 		setTimeout(function () {
// 			console.log("depth3", new Date());
// 			throw new Error("Already 3-depth!!");
// 		}, 3000);
// 	}, 2000);
// }, 1000);

const timer = (n) =>
	new Promise((resolve, reject) => {
		const sec = n * 1000;
		if (n <= 3) {
			setTimeout(() => {
				console.log(`depth${n}`, new Date());
				resolve(sec);
			}, sec);
		} else reject(new Error("Error!"));
	});

console.log("START!", new Date());
timer(1)
	.then(() => timer(2))
	.then(() => timer(3))
	.then(() => timer(4))
	.catch((err) => {
		console.log("errrrrr");
	});
