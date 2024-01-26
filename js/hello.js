// primitive(call-by-value) vs. object(call-by-reference)

const userName = "Hong"; // const는 변하지 않는 값
let age; // declare(선언)+define(정의->메모리가 할당 됐다는 뜻) (undefined라는 값이 들어가서 정의된거임, Stack에)
// 다른 언어들은 메모리 할당이 안됨.
console.log("🚀 ~ age:", age);
// console.log("Hello,", userName, "!"); ==> 예전방식
console.log(`Hello, ${userName}!`);

//hoisting 설명
zz = 9; // 암묵적으로 var(globalThis?)로 선언하는 것임
console.log(zz);
// let zz = 10; //hoisting때문에 let zz;가 앞으로 가게 됨, 그래서 에러남
// console.log(globalThis["zz"]);
