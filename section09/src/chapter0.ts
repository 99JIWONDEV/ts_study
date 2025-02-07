// 조건부 타입 

type A = number extends string ? string : number

type objA = {
  a:number;
}

type objB = {
  a: number;
  b: number;
}

type B = objB extends objA ? number : string;

// 제네릭과 함께 사용할 때 유용 
// 제네릭과 조건부 타입 

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>
let varB : StringNumberSwitch<string>

function removeSpaces<T>(text: T) : T extends string ? string : undefined
function removeSpaces<T>(text: any) {
  if(typeof text === "string"){
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im jiwon");
result.toUpperCase();

let result2 = removeSpaces(undefined);