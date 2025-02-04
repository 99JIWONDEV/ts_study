// 인터페이스 

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 오버로딩을 구현하고 싶으면 호출 시그니처를 사용해야 함 
}

const person: Person = {
  name: "박지원",
  age: 27,
  sayHi: function(){
    console.log("Hi")
  }
}

// person.name = "김지원"; // 에러 발생
