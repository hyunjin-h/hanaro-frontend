interface User {
	id: number;
	name: string;
}

interface Dept {
	id: number;
	dname: string;
	captain: string;
}

// type Ud2 = (User | Dept) & { addr: string }; 이게 원래 정답

interface Ud2 {
	[idx: string]: string | number;
	id: number; //id 안쓰면 감점이야 필수값이라서
	// name?: string;
	// dname?: string;
	// captain?: string;
	addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
