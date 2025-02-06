// 타입 변수 응용하기
// 첫번째 사례
// a와 b의 타입이 다른 경우 
// 제네릭 타입을 여러 개 만들 수 있음
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
// 두번째 사례
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]); // num에는 0이 저장됨 
let str = returnFirstValue([1, 'b', 'c']); // str에는 'a'가 저장됨
// 세번째 사례 
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength('hello'); // 5
let var3 = getLength({ length: 10 }); // 10
export {};
// let var4 = getLength(10)
