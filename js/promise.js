import { rand } from "./utils/index.js";
const randTime = new Promise();

function Promise(cb) {
	const thenFns = [];
	const catchFns = [];
	const finalFns = [];

	cb(
		(succ) => thenRecur(succ),
		(err) => catchRecur(err)
	);

	Promise.prototype.then = (fn) => {
		thenFns.push(fn);
		return this;
	};

	Promise.prototype.catch = (fn) => {
		catchFns.push(fn);
		return this;
	};

	Promise.prototype.finally = (fn) => {
		finalFns.push(fn);
		return this;
	};

	const finalRunner = () => {
		for (const f of finalFns) f();
	};

	const catchRecur = (preErr) => {
		this.state = "rejected";
		const fn = catchFns.shift();
		if (!fn) {
			finalRunner();
			if (preErr instanceof Error) throw preErr;
			else throw new Error(preErr);
		}

		try {
			fn(preErr);
			return finalRunner();
		} catch (error) {
			catchRecur(error);
		}
	};
	const thenRecur = (preRet) => {
		const fn = thenFns.shift();
		if (!fn) {
			this.state = "fulfilled";
			return finalRunner();
		}

		if (preRet instanceof Promise) {
			preRet
				.then((res) => {
					const r = fn(res);
					console.log("🚀  r:", r);
					r.catch((e) => {
						catchRecur(e);
					});
				})
				.then(thenRecur)
				.catch((err) => {
					catchRecur(err);
				});
		} else {
			try {
				const ret = fn(preRet);
				thenRecur(ret);
			} catch (error) {
				catchRecur(error);
			}
		}
	};

	this.state = "pending";
}
