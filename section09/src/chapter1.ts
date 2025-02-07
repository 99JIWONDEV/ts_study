// 분산적인 조건부 타입 
type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;
let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>;

let d:  StringNumberSwitch<boolean | number | string>; // string | number

// 실용적인 예제 
type Exclude <T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계 
// Exclude<number, string> | 
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과 
// number, string, boolean 중에서 string을 제외한 타입을 추출
// number | boolean

type Extract<T, U >= T extends U ? T : never;
type B = Extract<number | string | boolean, string>;