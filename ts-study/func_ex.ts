// 이름 있는 함수
/* function sub(x : number, y : number){
    return x - y;
} */

// 화살표 함수
// (매개변수 : 자료형) : return자료형(return 없으면 void)
const sub = (x : number, y : number) : number => { 
    return x - y
};

const result = sub(5, 10);

console.log(result);

// 반환 자료형이 없는 함수 : void
const greet = (name : String) : void => {
    console.log(`Hello, ${name}!`);    
}

greet("Lilia");
