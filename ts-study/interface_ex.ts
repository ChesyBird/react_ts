// 객체 정의
interface Member{
    name : String, // 필수 속성
    age? : number  // 선택 속성
}

// 객체 생성
const member1 : Member = {
    name : "이강",
    age : 21
}
const member2 : Member = {
    name : "안세영"
}
// 필수속성을 빼면 오류가 난다
// const member3 : Member = {age : 21}

console.log(`이름 : ${member1.name}, 나이: ${member1.age}`);
console.log(`이름 : ${member2.name}`);
