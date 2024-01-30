function f(a) {
	return a ** 2;
}
const af = (a) => a ** 2;
console.log(f(3));
console.log(af(3));

function f2(a, b) {
	const c = a ** b;
	return Math.sqrt(c);
}
const af2 = (a, b) => {
	const c = a ** b;
	return Math.sqrt(c);
};
console.log(f2(3, 2));
console.log(af2(3, 2));

// function gugudan(a) {
// 	return function (b) {
// 		return a * b;
// 	};
// }
const gugudan = (a) => (b) => {
	return a * b;
};
const gugu2 = gugudan(2); //gugu2는 2단의 세상!
console.log(gugu2(5)); //2단의 세상에서 5를 곱합. 2*5=10
console.log("========================");
globalThis.y = 10; //node는 var일때 전역이 아닌 모듈로 잡힘. 그래서 globalThis로 선언했음!
function bfn(x) {
	console.log(x, this.y);
}
bfn(9);
bfn.bind({ y: 999 })(7); //bind this를 강제로 치환함

const bfn_a = (x) => console.log(x, this.y);
bfn_a.bind({ y: 1000 })(10); //화살표 함수는 bind 안됨! (부모의 this를 가리킴)

console.log("========================");

const obj = {
	name: "ObjName",
	bark1() {
		console.log("1=", this.name);
		const self = this;
		setTimeout(function () {
			console.log("11=", self.name);
		}, 1000);
	},
	bark2() {
		console.log("2=", this.name);
		setTimeout(() => {
			console.log("22=", this.name);
		}, 1000);
	},
};

obj.bark1();
obj.bark2();
