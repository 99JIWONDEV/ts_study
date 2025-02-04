// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func (a: number,b: number) {
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number,b: number) => a + b;

// 함수의 매개변수 
// 매개변수를 생략하고 싶다면 물음표를 붙이면 됨 = 선택적 매개변수 
// 생략하면 안되는 매개변수 = 필수 매개변수, 필수 매개변수는 선택적 매개변수보다 앞에 배치 
function introduce (name = "박지원", age: number, tall?: number){
  console.log(`name: ${name}`)
  if (typeof tall === "number"){
    console.log(`tall: ${tall + 10}`)
  }
}

introduce("박박박", 27)

// ... 가변적 매개변수를 받을 때 쓰는 문법 
function getSum(...jiwon: number[]){
  let sum = 0;
  jiwon.forEach((it)=>sum+=it)
  return sum;
}

getSum(1,2,3)
getSum(1,2,3,4,5)