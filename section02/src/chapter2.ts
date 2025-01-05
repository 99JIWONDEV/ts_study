// 배열
let numArr: number[] = [1, 2, 3]; // 배열 안에 number가 있다는 뜻

let strArr: string[] = ["hello", "im", "jiwon"];

let boolArr: Array<boolean> = [true, false, true]; //제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
	[1, 2, 3],
	[4, 5],
];

// 튜플 (only 타입스크립트)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["박지원", 1],
  ["박아무개", 2],
  ["김아무개", 3],
  // [4, "이아무개"] 
]
