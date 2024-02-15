const debounce = (cb, delay) => {
	let timer;
	return (...args) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(cb, delay, ...args);
	};
};
const act = debounce((a) => a + 1, 1000);
act(100);
// 1초 동안 n번 호출 => 실행은 1회만!
// 1초 후 => cb(100) 실행
// 1.5초 후
act(100);
