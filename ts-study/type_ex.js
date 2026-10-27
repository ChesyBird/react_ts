"use strict";
/* type User {
    id : number,
    name : String,
    age? : number  */
// 객체 생성
const user1 = { id: 1, name: "이자헌", role: 'admin' };
const user2 = { id: 4, name: "김솔음", age: 28, role: 'user' };
console.log(`회원1 - ID : ${user1.id}, 이름 : ${user1.name}, 권한 : ${user1.role}`);
console.log(`회원1 - ID : ${user2.id}, 이름 : ${user2.name}, 나이 : ${user2.age}, 권한 : ${user2.role}`);
