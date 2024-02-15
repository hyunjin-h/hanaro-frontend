const isStringNumber = (value: unknown): value is [string, number] =>
	typeof value === "string" || typeof value === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
	if (isStringNumber(value)) {
		console.log(value[0].toUpperCase(), value[1].toFixed());
	}
};

interface Animal {}
interface Dog extends Animal {
	name: string;
}
interface Cat extends Animal {
	punch(): void;
}
class Retriever implements Dog {
	constructor(public name: string) {
		this.name = name;
	}
}

function isDog(a: Animal): a is Dog {
	return (a as Dog).name !== undefined;
}

export {};
