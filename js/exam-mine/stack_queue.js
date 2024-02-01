class Stack {
	#arr;
	constructor(args) {
		this.#arr = args;
	}
	push(item) {
		this.#arr.push(item);
	}
	pop() {
		return this.#arr.pop();
	}
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
