// 제네릭 인터페이스
// 타입 변수(타입 파라미터)에 할당할 타입을 꺽쇠와 함께 반드시 명시해야 한다.
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1", "2"],
};
let numberMap1 = {
    key: -123,
    key2: 123,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "value",
};
function goToSchool(user) {
    // if(user.profile.type !== "student") {
    //  console.log("잘못 오셨습니다")
    //  return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
// goToSchool(developerUser); // 에러
const developerUser = {
    name: "박지원",
    profile: {
        type: "developer",
        skill: "typescript"
    }
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "아주대학교"
    }
};
export {};
