// const d1 = new Date();
// d1.setFullYear(1970);
// d1.setMonth(0);
// d1.setDate(1);
// console.log("d1=>", d1);

// const d2 = new Date();
// d2.setFullYear(1970);
// d2.setMonth(0);
// d2.setDate(2);
// console.log("d2=>", d2);

// console.log(Math.floor((d2.getTime() - d1.getTime()) / 1000));

// const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

// const lastDate = new Date();
// lastDate.setDate(1);
// lastDate.setMonth(lastDate.getMonth() + 1);
// lastDate.setDate(-1);
// console.log("🚀 ~ lastDate:", lastDate);
// const dates = Array(5)
// 	.fill(0)
// 	.map(() => rand(1, lastDate.getDate()))
// 	.map((day) => {
// 		const tmpDate = new Date();
// 		tmpDate.setDate(day);
// 		return tmpDate;
// 	});
// console.log(
// 	"🚀 ~ days:",
// 	dates.sort((a, b) => (a > b ? 1 : -1))
// );

const nextYearToday = new Date();
nextYearToday.setFullYear(nextYearToday.getFullYear() + 1);

console.log("next year today", `${"일월화수목금토"[nextYearToday.getDay()]}요일`);

let arr = "";
const date = new Date();
const toYear = date.getFullYear();
const toMonth = date.getMonth();
// var toMonth = 5;
firstDay = new Date(toYear, toMonth, 1).getDay(); //1일의 요일
lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이달 마지막날

//해당 월
const month = toYear + "년" + (toMonth + 1) + "월";
console.log("ㅤㅤㅤㅤㅤ", month, `\n`);

console.log("ㅤ일ㅤ월ㅤ화ㅤ수ㅤ목ㅤ금ㅤ토");
// 첫번째줄 빈칸 숫자 알아내기 (10월 기준 5개)
// 빈칸 뒤에 날짜 출력
// 날짜를 요일에 셋팅

// 첫번째 줄 빈칸 5개
for (let bin = 0; bin < firstDay; bin++) {
	arr += "ㅤㅤ";
}
// console.log(bin);

//날짜
for (let i = 1; i <= lastDate; i++) {
	getday = new Date(toYear, toMonth, i).getDay(); // 요일을 얻어낸다. (일요일=0, 토요일=6)
	if (getday == 0) {
		arr += "\n";
	}
	let n = i.toString().padStart(2, " ");
	arr += "ㅤ" + n;
}

console.log(arr);
