// any
// 특정 변수의 타입을 확실이 모를 떄 사용 (타입스크립트의 이점을 포기) 

// 0지정하지 않아도 초기화하는 값으로 타입을 추정
let anyVar: any = 10;

let num: number = 5;
num = anyVar;

console.log(num);


// unknown 
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";

// num = unknownVar; // unknown 타입은 다른 타입에 할당할 수 없음

// 따라서 unknown 타입을 쓰는게 더 안전하다. 
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

console.log(num);