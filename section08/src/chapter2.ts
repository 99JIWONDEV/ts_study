// keyof 연산자 

// typeof 연산자는 객체의 모든 프로퍼티 키를 유니온 타입으로 추출한다. (타입을 예상할 수 있음)
type Person = typeof person;

// keyof를 쓰면 Person 객체의 모든 프로퍼티를 유니온 타입으로 추출 => "name" | "age" 
// 따라서 새로운 프로퍼티가 생성되어도 유연하게 대처가능
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "박지원",
  age: 27
}



getPropertyKey(person, "name")