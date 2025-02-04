// 제네릭 (일반적인, 포괄적인)
// 매개변수를 넣은 타입에 따라 반환값이 달라지도록 하고 싶을 때 사용 

// 제네릭 함수
function  func<T>(value: T):T { // 타입 변수 T는 상황에 따라 다른 타입으로 대체될 수 있음
  return value;
}

let num = func(10);
if (typeof num === 'number') {
  num.toFixed();
}

let bool = func(true);

let str = func('str');

let arr = func<[number, number, number]>([1, 2, 3]); // 배열 함수를 튜플 타입으로 재정의 



