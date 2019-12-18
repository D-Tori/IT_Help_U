enum Color {
  Main = "#5457ff",
  Darkmain = "#4a47d5",
  Point = "#963484",
  border = "#eee"
}

// 상태를 위한 타입 설정
export type Menu = {
  name: string,
  btnName: string,
  condition: string,
  isBtn: boolean
}

type MenusState = Menu[];

const initialState: MenusState = [
  { name: "프로젝트 둘러보기", btnName: "새 프로젝트 작성", condition: "projects", isBtn: true},
  { name: "멘토", btnName: "명예 멘토", condition: "mentors", isBtn: true},
  { name: "고민 게시판", btnName: "새글 작성", condition: "boards", isBtn: true},
  { name: "사용 기술", btnName: "", condition: "projectSkills", isBtn: false},
  { name: "고민 내용", btnName: "새글 작성", condition: "board", isBtn: true},
  { name: "댓글", btnName: "댓글 작성", condition: "comments", isBtn: true},
  { name: "프로젝트 상세내용", btnName: "목록 보기", condition: "project", isBtn: true},
  { name: "관련 기술", btnName: "", condition: "mentorSkill", isBtn: false},
]

function menu (state: MenusState = initialState) {
  return state;
}

export default menu;
