// enum Color {
//   Main = "#5457ff",
//   Darkmain = "#4a47d5",
//   Point = "#963484",
//   border = "#eee"
// }

// 상태를 위한 타입 설정
export type Menu = {
  name: string,
  toggleBtnName?: string,
  funcBtnName?: string,
  toggleBtn: boolean,
  funcBtn: boolean,
  condition: string,
  routing?: string
}

type MenusState = Menu[];

/**
 *  name: string = 메뉴 이름
    btnName: string = 버튼 이름
    condition: string = 조건
    addBtn: boolean = 기능 버튼 유무
    toggleBtn: boolean = 라우팅, 필터링 버튼 유무
    toggleBtnName: string = 라우팅, 필터링 버튼 이름
    addBtnName: string = 기능 버튼 이름
 */
const initialState: MenusState = [
  { name: "프로젝트 둘러보기", toggleBtnName: "모집중", funcBtnName: "새 프로젝트 작성", condition: "projects", toggleBtn: true, funcBtn: true, routing: 'project/write' },
  { name: "멘토", toggleBtnName: "명예 멘토", condition: "mentors", toggleBtn: true, funcBtn: false},
  { name: "고민 게시판", funcBtnName: "새글 작성", condition: "boards", toggleBtn: false, funcBtn: true, routing: 'board/write'},
  { name: "사용 기술", condition: "projectSkills", toggleBtn: false, funcBtn: false},
  { name: "고민 내용", funcBtnName: "새글 작성", condition: "board", toggleBtn: false, funcBtn: true, routing: 'project/write'},
  { name: "댓글", funcBtnName: "댓글 작성", condition: "comments", toggleBtn: false, funcBtn: true},
  { name: "프로젝트 상세내용", funcBtnName: "목록 보기", condition: "project", toggleBtn: true, funcBtn: true, routing: 'projects'},
  { name: "관련 기술", condition: "mentorSkill", toggleBtn: false, funcBtn: false},
  { name: "새글 쓰기", funcBtnName: "목록보기", condition: "boardWrite", toggleBtn: false, funcBtn: true, routing: 'board/write'},
]

function menu (state: MenusState = initialState) {
  return state;
}

export default menu;

