// 1. 휴대폰 번호 검증
const phoneRegex = /^010-\d{3,4}-\d{4}$/;
console.log("1. 휴대폰 번호 검사");
console.log(phoneRegex.test("010-1234-5678"));  // true
console.log(phoneRegex.test("010-123-456"));    // false

// 2. 아이디 검사 : 영문 소문자 또는 숫자 / 4~12자리
const userIdRegex = /^[a-z0-9]{4,12}$/;
console.log("2. 아이디 검사");
console.log(userIdRegex.test("abc123"));    // true
console.log(userIdRegex.test("1234"));      // true
console.log(userIdRegex.test("abc"));       // false(3글자)

// 3. 아이디 검사 : 필수 포함
/* () : 그룹 기호
?=.* : 전방 탐색
(?=.*[a-z]) : 어딘가에 소문자 한개 이상 포함
(?=.*\d) : 어딘가에 숫자 한개 이상 포함
*/
const userIdRegex2 = /^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,12}$/;
console.log("3. 아이디 검사");
console.log(userIdRegex2.test("abc123"));    // true
console.log(userIdRegex2.test("1234"));      // false
console.log(userIdRegex2.test("abc"));       // false(3글자)

// 4. 이메일 검사
/* 
 아이디@도메인.확장자
 . : \.으로 표기
 [^\s@] : ^를 검색괄호 안에 쓸 때는 not의 의미
*/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
console.log("4. 이메일 검사");
console.log(emailRegex.test("hong@naver.com"));     // true
console.log(emailRegex.test("hong@naver"));         // false
console.log(emailRegex.test("hong@naver.co.kr"));   // true
console.log(emailRegex.test("hong"));               // false


