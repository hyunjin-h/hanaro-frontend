const hong = { id: 1, name: "Hong" };
const map = new Map([
	[1, 11],
	[2, 22],
]);
map.set("three", 333); // {three: 333, four: [1,2]}
map.set("four", [1, 2, 3, 4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map); // Map(6) {  1 => 11, 2 => 22, 'three' => 333, 'four' => [ 1, 2, 3, 4 ],        ?, ?}
console.log(map.get(hong)); // 'Hong'
