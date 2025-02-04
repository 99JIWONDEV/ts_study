// 함수 오버로딩 

// 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법 (오직 TS에서만 가능)
// -> 하나의 함수 func 
// -> 모든 매개변수의 타입 number 
// -> 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력 
// -> 매개변수가 3개 -> 세 매개변수를 더한 값 출력

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처 
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 에러
func(10);
// func(10,20); // 에러
func(10, 20, 30);