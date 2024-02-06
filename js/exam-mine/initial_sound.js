const strData = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

// const results = strData.filter((strData) => strData.match(/[ㄱ가-깋][ㅅ사-싷]/)); // 아이디어는 이렇습니다.

import { searchByInitialSound } from "../utils/regexputils.js";
console.log(searchByInitialSound(strData, "ㄱㅅㄱ"));

// assert.deepStrictEqual(searchByInitialSound(s, "ㄱㅇ"), ["강원도 고성군"]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㄱㅅㄱ"), ["강원도 고성군", "고성군 토성면"]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅌㅅㅁ"), ["고성군 토성면", "토성면 북면"]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅂㅁ"), ["토성면 북면", "북면"]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅍㅁ"), []);
// assert.deepStrictEqual(searchByInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
