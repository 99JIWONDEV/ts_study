// Pick<T, K>
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
	title: string;
	tags: string[];
	contents: string;
	thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
	// K extends "title" | "tags" | "contents" | "thumbnailURL"
	// "title" | "contents" extends "title" | "tags" | "contents" | "thumbnailURL"
	[key in K]: T[key];
};

// title, contents만 뽑아라
const legacyPost: Pick<Post, "title" | "contents"> = {
	title: "옛날 글",
	contents: "옛날 컨텐츠",
};

// Omit<T, K>
// -> 생략하다, 빼다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post 타입, K = "title"
// Pick <Post, Exclude<keyof Post, "title">>
// Pick <Post, Exclude<"title | "tags" | "contents" | "thumbnailURL", "title">>
// Pick <Post, "tags" | "contents" | "thumbnailURL">

// title만 뺴라
const noTitlePost: Omit<Post, "title"> = {
	contents: "",
	tags: [],
	thumbnailURL: "",
};

// Record<K, T>
// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   }
//   medium: {
//     url: string;
//   }  
//   small: {
//     url: string;
//   }
// }  

type Record<K extends keyof any, V> = {
  [key in K] : V
}

type Thumbnail = Record <"large" | "medium" | "small", {url: string; size: number}>;