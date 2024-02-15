interface IUser {
	id: number;
	age: number;
	name: string;
}

interface IDept {
	id: number;
	age: string;
	dname: string;
	captain: string;
}
type Change<T, K extends keyof T, U> = T & { [P in keyof T]: P extends K ? U : T[P] }; // K('captian')이면 U(IUser), 아니면 나머지 프로퍼티

type DeptCaptain = Change<IDept, "captain", IUser>;

// type Err = Change<IDept, "somekey", IUser>; // Error!!!

export {};
