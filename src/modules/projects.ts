// 액션 Type
const ADD_PROJECT = 'boards/ADD_PROJECT' as const;

export const addProject = (payload: Project) => ({
  type: ADD_PROJECT,
  payload: payload
});


// 액션들의 타입 정의

type ProjectAction =
  | ReturnType<typeof addProject>;


export type Project = {
  id: number,
  title: string,
  intro: string,
  skills: Array<string>,
  place: string,
  comments?: number[],
  members?: string[],
  startDate?: Date,
  endDate?: Date,
  time?: Date,
  user: string,
  userMail: string
  state: string,
  required: string
}

type ProjectState = Project[];


const initialState: ProjectState = [
  { id: 1,
    title: "첫번째 입니다.",
    intro: "첫번째 프로젝트 입니다. 참여할사람요?",
    skills: ["react", "mongoDB", "nodejs"],
    place: "신천역 4번 출구",
    comments: [1,2,3,1232,5],
    members: ["fepan2007,", "hongishappy0327", "wtf"],
    user: "fepanbr",
    userMail: "fepanbr@gmail.com",
    state: "모집중",
    required: "리액트 잘하시는 분 모집하고, 포토샵 일러스트 잘하는 분 1분 구합니다. 꼭 참여좀여."
  }
];

function project (state: ProjectState = initialState, action: ProjectAction): ProjectState {
  switch(action.type) {
    case ADD_PROJECT:
      const nextId = Math.max(...state.map(project => project.id)) + 1;
      return state.concat({
        id: nextId,
        title: action.payload.title,
        intro: action.payload.intro,
        skills: action.payload.skills,
        place: action.payload.place,
        comments: action.payload.comments,
        members: action.payload.members,
        user: action.payload.user,
        userMail: action.payload.userMail,
        state: action.payload.state,
        required: action.payload.required
      });
    default:
      return state;
  }
}

export default project;
