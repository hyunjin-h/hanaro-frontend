const user = { id: 1, name: "P", age: 33 };
const { age2 = 30 } = { name: "Park", age2: 20 };

const { name: n, age = 30 } = { name: "Lee" };
const fn = ({ age }) => age;
// function fn({ age }) {return age;}
// age2:age3(변수명)=fn(user)(age2값이 없으면 이 값이 들어간다.)
const { age2: age3 = fn(user) } = { age22: 20 };
console.log(age2, age3);
//20 30
