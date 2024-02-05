// under node v18
// import fetch from 'node-fetch';     // browser에서는 생략(자체제공)
// node> npm i node-fetch

const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const sampleUrl2 = "https://jsonplaceholder.typicode.com/posts/1";
// const myFetch = (url) => fetch(url).then((res) => res.json()); //네트워크 응답

// // myFetch를 이용하는 코드
// if (isAsyncAwait) {
//     const res = await fetch(sampleUrl);
//     const data = await res.json();
//     console.log("🚀 ~ data:", data);
// }else myFetch(sampleUrl).then((user) => {
// 	//merge를 위해
// 	console.log("user>>>", user);
// });

// const promiFetch = (url) =>
// 	new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then((res) => res.json())
// 			.then(resolve);
// 	});

// const asyncFetch = async (url) => {
// 	const res = await fetch(url); //fetch 가 끝나면 실행
// 	return await res.json(); //await을 쓰면 promise가 아니어야하는데? 받는 입장에선 똑같은 Promise 그래서 생략 많이해
// };

// // const fn = promiFetch;
// // const fn = asyncFetch;

// const data = await promiFetch(sampleUrl);

// console.log(data);

// const data2 = await asyncFetch(sampleUrl);

// console.log(data2);

// const rets = [sampleUrl, sampleUrl2].map(async (url) => {
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	return data;
// });
// console.log("🚀 ~ rets ~ rets:", rets);

const f = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

	if (!res.ok) throw new Error("Failt to Fetch!!");

	//   <2초 sleep하도록 이 부분을 작성해 보세요!>
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	const data = await res.json();

	return data.name;
};

console.log(await f());
