//타입 계층도를 보면서 학습 
// unknown 타입
function unknownExam(){
  let a: unknown  = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null;
  let e: unknown = undefined;
  // 배열 객체도 넣을 수 있음 (모든 타입이 업캐스팅 할 수 있음)

  let unknownVar: unknown;

  // let num: number = unknownVar // 다운캐스팅은 불가능
}


//never 타입 
// 모든 타입의 서브타입 (공집합)
function neverExam(){
  function neverFunc(): never {
    while(true){} // 반환할 수 있는 값의 종류가 아무것도 없다 
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc(); 

  // let never1: never = 10; // 다운캐스팅은 불가능
}


// void 타입
function voidExam(){
  function voidFunc(): void {
    console.log('hello');
    return undefined; // undefined의 슈퍼타입이 void라서 가능 
  }

  let voidVar: void = undefined;
}


// any 타입 
// 치트키임. 타입 계층도를 완전히 무시 
// 모든 타입의 슈퍼타입이자 모든 타입의 서브타입이기도 함
// 무서운 타입이라 사용을 자제해야 함
function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar; // any는 never에 할당할 수 없음(never는 순수한 공집합이기 때문에 어떠한 타입도 다운 캐스팅 불가)
}