// 타입 추론

// 점진적 타입
let a = 10; // 알아서 초기값을 기준으로 타입을 추론 

// 모든 상황에서 추론해주지는 않음
// function func(param){}

// 그럼 어떤 상황에서 추론을 해주는가?
let d; // 일단 변수 선언 - any 
d = 10;
d.toFixed(2);

d = "hello";
d.toUpperCase(); // any 타입의 진화 - 별로 좋지 않음 

const num = 10;
const str = "hello";

let arr = [1, "string"] // (string | number)[] 유니온 타입으로 추론 

// 타입 넓히기를 위해서 let을 사용하는게 좋네