// 타입 좁히기 
// 조건문등을 이용해서 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법


type Person = {
  name: string;
  age: number;
}

// value  => number 라면 toFixed()
// value => string 이라면 toUpperCase()
// value => Date 라면 getTime()
// value => Person 이라면 name, age 출력
function func(value: number | string | Date | null | Person) {
  if (typeof value  === "number") {
    console.log(value.toFixed());
  }
  else if(typeof value === "string") {
    console.log(value.toUpperCase());
  }else if(value instanceof Date) { // instanceof 연산자, instance 연산자는 클래스여야함
    console.log(value.getTime());
  }else if(value && "age" in value) { // value가 존재하고, age가 value에 존재한다면
    console.log(value.name, value.age);
  }
}