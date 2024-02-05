const sampleUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";

const promiFetch = (url) =>
	new Promise((resolve, reject) => {
		fetch(url)
			.then((res) => res.json())
			.then(resolve);
	});

const data = await promiFetch(sampleUrl);

console.log(data);

const commentUrl = "https://jsonplaceholder.typicode.com/posts/";
const getPosts = (url, postId, userId) =>
	new Promise((resolve, reject) => {
		fetch(`${url}/${postId}/comments`)
			.then((res) => res.json())
			.then(resolve);
	});
const comments = await getPosts(commentUrl, 1);
console.log(comments);
