// 선언 합침
// 타입스크립트의 모듈(라이브러리)의 정의가 부실한 경우에 타입을 추가해주는 용도로 사용 (모듈 보강)

interface Person {
	name: string;
}

interface Person {
  name: string; // 동일한 타입으로만 선언 가능
	age: number;
}

const person: Person = {
  name: "박지원",
  age: 27
}

// 모듈 보강 
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
a: 1,
b: 2,
c: "hello"
}

