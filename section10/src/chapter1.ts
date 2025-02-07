// partial<T>
// -> 부분적인, 일부분의 
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입 

interface Post {
  title: string;
  tags: string[];
  contents: string;
  thumbnailURL ?: string;
}

// keyof T 는 keyof 연산자는 모든 key를 union 타입으로 추출 - title | tags | contents | thumbnailURL
// key in 은 key가 한번은 title, tags, contents, thumbnailURL로 바뀜
// T[key]는 인덱스드 엑세스 타입으로 특정 프로퍼티 추출 
type Partial<T> = {
  [key in keyof T]?: T[key]
}
// 모든 프로퍼티를 선택적 프로퍼티로 만듬 
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    contents: "초안..."
}

// Required<T>
// -> 필수의, 필수적인 
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입 

type Required<T> = {
  [key in keyof T]-?: T[key]
}

const withThumbnailPost : Required<Post>= {
  title: "한 입 타스 후기",
  tags: ['ts'],
  contents: "",
  thumbnailURL: "https://..."
}

// Readonly<T>
// -> 읽기 전용, 수정 불가 
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입 

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}


const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다",
  tags: [],
  contents:"",
}

// readonlyPost.title = "수정 불가"

