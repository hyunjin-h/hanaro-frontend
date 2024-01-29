const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
function copyObject(obj) {
	const newObj = {};
	for (const k in obj) {
		newObj[k] = obj[k];
	}
	return newObj;
}
const newkim = copyObject(kim);
newkim.addr = "Daegu";
console.log(kim.addr !== newkim.addr);
