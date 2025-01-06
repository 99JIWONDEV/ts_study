// void
// void -> 공허 -> 아무것도 없음을 의미하는 타입 

function func1(): string{
  return "hello";
}

function func2(): void{
  console.log("hello");
}

// 오직 undefined만 할당 가능
// strictNullChecks 옵션을 사용하지 않을 경우 null도 할당 가능
let a: void = undefined;

// never
// never -> 존재하지 않는 
// 불가능한 타입 및 모순

function func3(): never{
  while(true){

  }
}

function func4(): never{
  throw new Error("error");
}

