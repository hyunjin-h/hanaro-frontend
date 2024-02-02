Object.defineProperties(Array.prototype, {
	first: {
		get: function () {
			return this[0];
		},
	},
	last: {
		get: function () {
			return this[this.length - 1];
			// return this.slice(-1)[0];
		},
	},
});
Array.prototype.uniqBy = function (prop) {
	return [...new Set(this.map((item) => item[prop]))];
};

Array.prototype.filterBy = function (prop, value) {
	return this.filter((item) => item[prop] === value);
};

Array.prototype.sortBy = function (prop, direction = "asc") {
	const flag = direction.toLowerCase() === "asc" ? 1 : 0;
	return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
	//this.sort는 원래값이 변경됨
};

Array.prototype.findBy = function (prop, value) {
	return this.find((item) => item[prop] === value);
};

const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "A", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
const uniqDepts = users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]
console.log("🚀 ~ uniqDepts:", uniqDepts);

const hrUsers = users.filterBy("dept", "HR");
console.log("🚀 ~ hrUsers:", hrUsers);

console.log("SortbyID", users.sortBy("id"));
console.log("SortbyName", users.sortBy("name"));
