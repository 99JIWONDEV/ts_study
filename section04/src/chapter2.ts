// 함수 타입 호환성

// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?

// 기준 1. 반환값의 타입이 호환되는가?
type A = () => number;
type B = () => 10; // number 리터럴 타입

let a: A = () => 10;
let b: B = () => 10;

a = b; // 가능 반환값 타입이 더 큼 (업캐스팅 가능)
// b = a; // 불가능 (다운캐스팅 불가능)

// 기준 2. 매개변수의 타입이 호환되는가?
// 2-1 매개변수의 개수가 같은 경우

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 불가능 (업캐스팅 불가능)
d = c; // 가능 매개변수 타입이 더 작은 곳에 큰 것이 들어갈 수 있음 (다운캐스팅 가능)

// Animal 타입은 Dog 타입의 슈퍼 타입 (Dog는 Animal의 서브 타입)
type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// animalFunc = dogFunc; // 불가능 Animal 타입에는 color 매개변수가 없음 (매개변수는 업캐스팅 불가능)

// 2-2 매개변수의 개수가 다른 경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 가능, 매개변수 갯수가 적은 곳에서 많은 곳으로는 가능 (업캐스팅 가능)
// func2 = func1; // 불가능, 매개변수 갯수가 많은 곳에서 적은 곳으로는 불가능 (다운캐스팅 불가능)