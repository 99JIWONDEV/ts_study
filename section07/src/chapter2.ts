// 제네릭 map, forEach 타입 정의 하기 
// map 매서드 

const arr = [1,2,3]
const newArr = arr.map((item) => item * 2); //item 파라미터를 자동으로 추론함
console.log(newArr); // [2,4,6]

function map<T, U>(arr:T[], callback: (item:T) => U){
  let result = [];
  for (let i=0; i < arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => item * 2); // [2,4,6]
map(["hi", "hello"], (item)=>parseInt(item)); // ["HI", "HELLO"]
// 근데 map 매서드는 인풋 배열과 아웃풋 배열이 같지 않을 수도 있음, 따라서 제네릭 타입 변수를 2개 써줘야 함.


// forEach 매서드
const arr2 = [1,2,3];
arr2.forEach((item) => console.log(item)); // 1,2,3 마치 for문으로 배열을 순환 

function forEach<T> (arr:T[], callback:(item: T)=> void){
  for (let i=0; i < arr.length; i++){
    callback(arr[i]);
  }
}

forEach(arr2, (item) => {console.log(item.toFixed())}); // 1,2,3
forEach(["123",456], (item) => item); 