class Collection {
	#arr;
	constructor(...args) {
		this.#arr = Array.isArray(args[0]) ? args[0] : args; //args가 arr가 아니면 arr로 들어오게하려고
	}
	get _arr() {
		return this.#arr;
	}
	push(value) {
		this.#arr.push(value);
		return this; //chaining할 수 있게
	}
	pop() {
		return this.#arr.pop();
	}
	size() {
		return this.#arr?.length; //arr가 없을수도 있다라는 의미로 ? 달기
	}
	toString() {
		return `${this.constructor.name}(${this.size()})\n${JSON.stringify(this.#arr)}`;
	}
	print() {
		console.log(this.toString());
	}

	toArray() {
		return [...this.#arr]; //shallow copy
	} // return this.#arr; 이러면 외부에서 arr를 조작할 가능성이 있음
	clear() {}
	toArray() {}
	remove() {}
	isEmtpy() {}
	isStack() {
		return this.constructor.name === "Stack";
	}
	peek() {
		return this.#arr.at(this.isStack() ? -1 : 0); //stack이면 마지막꺼 queue면 처음꺼
	}
	poll() {}
}

class Stack extends Collection {
	*[Symbol.iterator]() {
		for (let i = 0; i < this.size; i += 1) {
			yield this._arr[i];
		}
	}
	iterator() {
		return this[Symbol.iterator]();
	}
}

class Queue extends Collection {
	enqueue(value) {
		this._arr.push(value);
		return this;
	}
	dequeue() {
		return this._arr.shift();
	}
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
// console.log("🚀 ~ stack:", stack.toString());
stack.print();
stack.push(3); // 추가하기
console.log("peek=", stack.peek());
console.log("last pop= ", stack.pop()); // 마지막에 추가된 하나 꺼내기
console.log([...stack]); // Bad
const itStack = stack.iterator();
console.log(itStack.next());
