// 제네릭 (일반적인, 포괄적인)
// 매개변수를 넣은 타입에 따라 반환값이 달라지도록 하고 싶을 때 사용 
// 제네릭 함수
function func(value) {
    return value;
}
let num = func(10);
if (typeof num === 'number') {
    num.toFixed();
}
let bool = func(true);
let str = func('str');
let arr = func([1, 2, 3]); // 배열 함수를 튜플 타입으로 재정의 
export {};
