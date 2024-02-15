interface Naver {
	userid: number;
	username: string;
	email: string;
}
interface Kakao {
	userid: number;
	userName: string;
	kakaotalk: string;
	email: string;
}

// # 1:
// type SnsUser = (Naver | Kakao);

// # 2:
// interface SnsUser extends Partial<Naver>, Partial<Kakao> {

interface SnsUser {
	[idx: string]: string | number;
	userid: number;
	email: string;
	// # 3:
	// username?: string;
	// userName?: string;
	// kakaotalk?: string;
}

// 다음 코드에 오류가 없으면 통과!
const naverUser: SnsUser = { userid: 1, username: "HH", email: "abc@naver.com" };
const kakaoUser: SnsUser = { userid: 1, userName: "HH", kakaotalk: "HH", email: "abc@hanmail.net" };
