// 인덱스드 엑세스 타입

// 객체
// 객체 타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의해줄 수 있는 문법
interface Post {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
    age: number;
	};
}

// 배열처럼 [인덱스]을 이용해서 사용 
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "박지원",
    age: 27
  },
}


// 배열 
type PostList = {
  title: string;
	content: string;
	author: {
		id: number;
		name: string;
    age: number;
	};
}[]

function printAuthorInfo2(author: PostList[number]["author"]){
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "박지원",
    age: 27
  },
}

//튜플 
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string 

type Tup2 = Tup[2]; // boolean

// type Tup3 = Tup[3]; // 에러

type TupNum = Tup[number]; // number | string | boolean