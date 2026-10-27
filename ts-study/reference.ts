// Grade 타입 정의
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

// 수강 과목 객체
interface Course {
    courseId : number,   // 과목 아이디
    courseName : String, // 과목명
    grade : Grade        // 학점 타입 참조
}

// 학생 객체
interface Student {
    id : number,
    name : String,
    subjects : Course[]  //수강 과목 객체 참조
}

// 객체 생성
let std1 : Student = {
    id : 1,
    name : "박민성",
    subjects : [
        {courseId : 101, courseName : "보육학과", grade : 'A'},
        {courseId : 102, courseName : "유아교육학과", grade : 'B'}
    ]
}

// 학생 정보 출력
console.log(std1.name);
std1.subjects.forEach(subject => 
    console.log(`과목명 : ${subject.courseName}, 학점 : ${subject.grade}`)
);