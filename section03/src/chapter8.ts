// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입
// 예를 들어서 string 과 number는 서로소이다.

// 웹 서비스 회원관리 기능
type Admin = {
  tag: "ADMIN";
	name: string;
	kickCount: number;
};

type Member = {
  tag: "MEMBER";
	name: string;
	point: number;
};

type Guest = {
  tag: "GUEST";
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}번 강퇴했습니다.
// Member -> {name}님의 포인트는 {point}점 입니다.
// Guest -> {name}님은 지금까지 {visitCount}번 방문했습니다.
function login(user:User){
  switch(user.tag){
    case "ADMIN":{
    console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
    break;
  }
    case "MEMBER":{
    console.log(`${user.name}님의 포인트는 ${user.point}점 입니다.`);
    break;
  }
    case "GUEST": {
    console.log(`${user.name}님은 지금까지 ${user.visitCount}번 방문했습니다.`);
    break;
  }
}

//   if(user.tag === "ADMIN"){
//     console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
//   }else if(user.tag === "MEMBER"){
//     console.log(`${user.name}님의 포인트는 ${user.point}점 입니다.`);
//   }else{
//     console.log(`${user.name}님은 지금까지 ${user.visitCount}번 방문했습니다.`);
//   }
}
// Admin 과 Member와 Guest 사이의 교집합은 존재하지 않음


// 서로소 유니온 타입을 이용하면 좋은 사례
// 비동기 작업의 결과를 처리하는 객체 

// type AsyncTask = {
//   state : "LOADING" | "SUCCESS" | "FAILED";
//   error?: {
//     message: string;
//   }
//   response?: {
//     body: string;
//   } 
// }

type Loading = {
  state: "LOADING";
}

type Success = {
  state: "SUCCESS";
  response: {
    body: string;
  }
}

type Failed = {
  state: "FAILED";
  error: {
    message: string;
  }
}

type AsyncTask = Loading | Success | Failed;

// 로딩 중  -> 로딩중입니다.
// 실패 -> 오류 발생 원인은 {message}
// 성공 -> 응답 결과 {body}
function processResult(task:AsyncTask){
  switch(task.state){
    case "LOADING": {
      console.log("로딩 중입니다.");
      break;
    }
    case "FAILED": {
      console.log(`오류 발생 원인은 ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`응답 결과 ${task.response?.body}`);
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
}

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~ "
  },
}

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    body: "응답 결과"
  }
}
