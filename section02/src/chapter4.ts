// 타입 별칭 (타입을 변수처럼 사용)

// 중복되면 안됨
type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
};

let user1: User = {
	id: 1,
	name: "박지원",
	nickname: "justin",
	birth: "1999.12.08",
	bio: "안녕하세요",
	location: "경기",
};

let user2: User = {
	id: 2,
	name: "홍길동",
	nickname: "justin",
	birth: "1999.12.08",
	bio: "안녕하세요",
	location: "경기",
};

//인덱스 시그니처
type CountryCodes = {
	[key: string]: string;
};

let countryCodes: CountryCodes = {
	Korea: "ko",
	USA: "us",
	China: "cn",
};

type CountryNumberCodes = {
	[key: string]: number;
  Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
	Korea: 410,
	USA: 840,
	China: 156,
};
