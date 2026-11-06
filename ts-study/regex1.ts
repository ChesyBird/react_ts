/*  match() 사용 : 표현식 테스트
 문자열이 처음부터 패턴이 맞는지 검사
 [a-z] : 소문자 검색
 '+' : 1개 이상 검색
*/
const m = "korea".match(/^[a-z]+/);
console.log(m?.[0]);

/* 문자열이 "어디든" 패턴이 있으면 반환
 \d : [0-9]
*/
const s1 = "abc123def".match(/\d+/);
console.log(s1?.[0]);
// ^ : 처음부터 찾는다.
const s2 = "abc123def".match(/^\d+/);
console.log(s2?.[0]); // undefined

// test("문자열") 사용 : boolean 반환
const a = /^[a-z]+/     // 정규표현식
const b = /^[a-z]+$/    // 처음부터 끝까지 소문자여야 한다(입력값 검증).
console.log(a.test("abc")); // true
console.log(a.test("abc123")); // true
console.log(a.test("123abc")); // false
console.log(b.test("abc")); // true
console.log(b.test("abc123")); // false
console.log(b.test("123abc")); // false

