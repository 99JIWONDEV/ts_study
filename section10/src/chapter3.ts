// Exclude<T, U>
// -> 제외하다, 추방하다
// -> T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string | never

// 최종적으로 string

type A = Exclude<string | boolean, boolean>; // string

// Extract<T, U>
// -> 추출하다, 뽑아내다
// -> T에서 U만 추출하는 타입

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean

// ReturnType
// -> 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function funcA() {
	return "hello";
}

function funcB() {
	return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
