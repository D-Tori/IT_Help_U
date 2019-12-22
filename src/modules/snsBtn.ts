enum Color {
  Main = "#5457ff",
  Darkmain = "#4a47d5",
  Point = "#963484",
  border = "#eee"
}

// 상태(state)를 위한 타입 선언
export type SnsBtn = {
  name: string,
  btnGoogle: string,
  btnNaver: string,
  btnKakao: string,
  btnFacebook: string,
  condition: string,
  isBtn: boolean
}

type SnsBtnState = SnsBtn[];

// 초깃값 설정
const initailState: SnsBtnState = [
  { name: "Welcome Back", btnGoogle: "Login with Google", btnNaver: "Login with Naver", btnKakao: "Login with Kakao", btnFacebook: "Login with Facebook", condition: "login", isBtn: true},
  { name: "Welcome", btnGoogle: "Sign up with Google", btnNaver: "Sign up with Naver", btnKakao: "Sign up with Kakao", btnFacebook: "Sign up with Facebook", condition: "signup", isBtn: true},
  { name: "비밀번호 초기화", btnGoogle: "", btnNaver: "", btnKakao: "", btnFacebook: "", condition: "resetpw", isBtn: false},
]

// 리듀서 구현
function snsbtn (state: SnsBtnState = initailState) {
  return state;
}

export default snsbtn;
