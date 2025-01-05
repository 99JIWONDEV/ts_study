// object (구조적 타입 시스템)
let user: {
	// 객체 리터럴 타입
	id?: number; // ?는 있을 수도 있고 없을 수도 있다는 의미 = 선택적 프로퍼티
	name: string;
} = {
	id: 1,
	name: "박지원",
};

let config:{
  readonly apiKey: string; // readonly는 읽기 전용 프로퍼티 (값을 변경할 수 없음)
} = {
  apiKey: "MY API KEY",
}

