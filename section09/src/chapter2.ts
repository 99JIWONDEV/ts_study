// infer (inference)
// 조건부 타입에서 특정 타입을 추출하는 것

type FuncA = () => string 
type FuncB = () => number

// 추론해서 true 가 될 값을 넣어줌 
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>
type B = ReturnType<FuncB>
type C = ReturnType<number> // never, 추론불가 

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다 
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다. 

type PromiseA = PromiseUnpack< Promise<number>>
// number

type PromiseB = PromiseUnpack< Promise<string>>
// string