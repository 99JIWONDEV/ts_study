// 제네릭 인터페이스

interface KeyPair<K, V> {
	key: K;
	value: V;
}

// 타입 변수(타입 파라미터)에 할당할 타입을 꺽쇠와 함께 반드시 명시해야 한다.
let keyPair: KeyPair<string, number> = {
	key: "key",
	value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
	key: true,
	value: ["1", "2"],
};

// 인덱스 시스니처
// key와 value의 규칙만 맞추면 유연하게 허용
interface NumberMap {
	[key: string]: number;
}

let numberMap1: NumberMap = {
	key: -123,
	key2: 123,
};

// 인덱스 시그니처를 이용한 제네릭
interface Map<V> {
	[key: string]: V;
}

let stringMap: Map<string> = {
	key: "value",
};

let booleanMap: Map<boolean> = {
	key: true,
};

// 제네릭 타입 별칭 (제네릭 인터페이스와 매우 비슷)
type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  key: "value",
}

// 제네릭 인터페이스의 활용 예시 
// 유저 관리 프로그램 
// 유저 구분 : 학생 유저 / 개발자 유저 

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";  
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if(user.profile.type !== "student") {
  //  console.log("잘못 오셨습니다")
  //  return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`)
}

// goToSchool(developerUser); // 에러

const developerUser :  User<Developer> = {
  name: "박지원",
  profile : {
    type: "developer",
    skill: "typescript"
  }
}

const studentUser : User<Student> = {
  name: "홍길동",
  profile : {
    type: "student",
    school: "아주대학교"
  }
}