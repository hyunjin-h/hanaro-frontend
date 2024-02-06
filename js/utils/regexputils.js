export const telfmt = (telstr) => {
	const len = telstr?.length;
	if (len <= 8) return `${telstr.substring(0, len - 4)}-${telstr.substring(len - 4)}`;

	const a = telstr.startsWith("02") ? 2 : len === 12 ? 4 : 3;
	const b = len - 4 - a;

	const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${4}})`);
	return telstr.replace(regex, "$1-$2-$3");
};

export const searchByInitialSound = (data, initSounds) => {
	const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
	const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하힣"; //[가-깋]의 처음 글자
	const regexps = [...initSounds].map((c) => {
		const idx = ㄱㄴㄷ.indexOf(c);
		if (idx === -1) return c;
		const S = 가나다.at(idx);
		const endCode = 가나다.at(idx + 1).charCodeAt(0);
		const E = String.fromCharCode(c === "ㅎ" ? endCode : endCode - 1); //깋닣딯 이런거

		//@ToDo ㅎ 처리!
		return `[${c}${S}-${E}]`;
	});

	const regex = new RegExp(regexps.join(""));
	return data.filter((d) => regex.test(d));
};
