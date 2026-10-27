// 제네릭 배열 : Array<T> <=> T[]
// Array(배열을 생성하는 클래스)
const scores : Array<number> = [80, 90, 100];

console.log(scores);
console.log(scores[0] + scores[1]);

// 제네릭 함수
function getFirst<T>(arr : T[]) : T{
    return arr[0];
}

const num = getFirst<number>([10, 20, 30]);
const str = getFirst<string>(["사과", "귤", "복숭아"]);

console.log(num, str);
