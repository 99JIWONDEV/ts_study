// 타입 단언 (안전하지는 않음)
// 눈을 잠깐 가리는 것
// 타입 단언이 필요한 상황

import { read } from "fs";

type Person = {
	name: string;
	age: number;
};

let person = {} as Person;
person.name = "박지원";
person.age = 26;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: "멍멍이",
	color: "white",
  breed: "Maltese"
} as Dog;

// 타입 단언의 규칙
// 값 as 단언
// A as B 
// A가 B의 슈퍼타입이거나 
// A가 B의 서브타입이거나

let num1 = 10 as never; // never는 모든 타입의 서브타입
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼타입

// let num3 = 10 as string; // 에러, 넘버와 스티링은 교집합이 없어서 에러

let num4 = 10 as unknown as string; // 꼼수로 에러 없애기 (다중단언) - 절대 좋은 방법이 아님. 

// const 단언
let num5 = 10 as const; 

let cat = {
  name : "야옹이",
  color: "white"
}as const;
// 모든 프로퍼티를 readonly로 만들어줌

// Non Null 단언
type Post = {
  title: string;
  author?: string; // 익명이라 없을 수도 있음 -> 선택적 프로퍼티 
}

let post: Post = {
  title: "게시글1",
  author: "박지원"
}

const len : number = post.author!.length; // ?를 !로 바꿔서 null이 아니라고 단언
