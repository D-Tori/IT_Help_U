// 액션 type
const ADD_MENTOR = "mentors/ADD_MENTOR" as const;


// 액션 생성 함수
export const addMentor = (pTitle: string, pInfo: string, mentorName: string, position: string, company: string, department: string) => ({
  type: ADD_MENTOR,
  payload: {
    pTitle: pTitle,
    pInfo: pInfo,
    mentorName: mentorName,
    position: position,
    company: company,
    department: department
  }
});


// 액션의 타입스크립트 타입 선언
type MentorsAction =
  | ReturnType<typeof addMentor>


// 상태를 위한 타입 선언
export type Mentor = {
  pTitle: string;
  pInfo: string;
  mentorName: string;
  position: string;
  company: string;
  department: string;
}
type MentorsState = Mentor[];


// 초깃값 설정
const initialState: MentorsState = [
  {
    pTitle: "IT개발",
    pInfo: "Java React Python HTML/CSS",
    mentorName: "박보영",
    position: "멘토",
    company: "nc소프트",
    department: "기획팀",
  }
];


// 리듀서 구현
function mentors(state: MentorsState = initialState, action: MentorsAction): MentorsState{
  switch (action.type){
    case ADD_MENTOR:
      return state.concat({
        pTitle: action.payload.pTitle,
        pInfo: action.payload.pInfo,
        mentorName: action.payload.mentorName,
        position: action.payload.position,
        company: action.payload.company,
        department: action.payload.department
      });
    default:
      return state;
  }
}

export default mentors;
