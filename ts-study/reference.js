"use strict";
// 객체 생성
let std1 = {
    id: 1,
    name: "박민성",
    subjects: [
        { courseId: 101, courseName: "보육학과", grade: 'A' },
        { courseId: 102, courseName: "유아교육학과", grade: 'B' }
    ]
};
// 학생 정보 출력
console.log(std1.name);
std1.subjects.forEach(subject => console.log(`과목명 : ${subject.courseName}, 학점 : ${subject.grade}`));
