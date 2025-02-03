// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입

// 합집합 타입 (Union Type)


let a : string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];



type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: ""
}

let union2 : Union1 = {
  name: "",
  language: ""
}

let union3 : Union1 = {
  name: "",
  color: "",
  language: "",
}

// let union4 : Union1 = {
//   name: "",
// }

// 교집합 타입 (Intersection Type)
let variable : number & string; // never 공집합

type Dog = {
  name : string;
  color: string; 
}

type Person = {
  name : string;
  language: string; 
}

type Intersection = Dog & Person;

let intersection1 : Intersection = {
  name: "",
  color: "",
  language: "",
}