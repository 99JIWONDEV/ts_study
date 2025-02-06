// 맵드 타입 
// 실무에서 아주 잘 쓰이는 타입

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 인터페이스에서 사용불가 only 타입 별칭에서만
// key가 무엇이 될 수 있는지 정의, 프로퍼티의 key들이 어떤 value 타입을 가질지 정의 
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]
}

type BooleanUser = {
  [key in keyof User]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

// 한 명의 유저 정보를 불러오는 기능 
function fetchUser(): ReadonlyUser {
  //... 기능 
  return {
    id: 1,
    name: "이지원",
    age: 27
  }
}

// 한 명의 유저 정보를 수정하는 기능 
function upDateUser(user: PartialUser) {
  // ... 수정하는 기능 

}

upDateUser({
  id: 1,
  name: "박지원",
  age: 27
})