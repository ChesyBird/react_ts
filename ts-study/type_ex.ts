
/* type User {
    id : number,
    name : String,
    age? : number  */

type User = {
    id : number,
    name : String,      // 필수속성
    age? : number       // 선택속성
    role : MemberRole   // 필수속성(타입 참조)
}

// Union 타입 : 여러 타입 중 하나를 선택
type MemberRole = "user" | "admin"

// 객체 생성
const user1 : User = {id : 1, name : "이자헌", role : 'admin'}
const user2 : User = {id : 4, name : "김솔음", age: 28, role : 'user'}

console.log(`회원1 - ID : ${user1.id}, 이름 : ${user1.name}, 권한 : ${user1.role}`);
console.log(`회원1 - ID : ${user2.id}, 이름 : ${user2.name}, 나이 : ${user2.age}, 권한 : ${user2.role}`);
