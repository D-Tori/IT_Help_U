// 액션 type
export const ADD_MENTOR_REQUEST = "mentors/ADD_MENTOR_REQUEST" as const;
export const ADD_MENTOR_SUCCESS = "mentors/ADD_MENTOR_SUCCESS" as const;
export const ADD_MENTOR_FAILURE = "mentors/ADD_MENTOR_FAILURE" as const;


export const GET_MENTOR_REQUEST = "mentors/GET_MENTOR_REQUEST" as const;
export const GET_MENTOR_SUCCESS = "mentors/GET_MENTOR_SUCCESS" as const;
export const GET_MENTOR_FAILURE = "mentors/GET_MENTOR_FAILURE" as const;


// 액션 생성 함수
// 멘토 추가
export const addMentorRequest = (payload: Mentor) => ({
  type: ADD_MENTOR_REQUEST,
  addMentorData: payload
});

export const addMentorSuccess = (data: Mentor) => ({
  type: ADD_MENTOR_SUCCESS,
  payload: data
});

export const addMentorFailure = (error: any) => ({
  type: ADD_MENTOR_FAILURE,
  errorReason: error
});

// 멘토 불러오기
export const getMentorRequest = (uid?: number) => ({
  type: GET_MENTOR_REQUEST,
  uid: uid
});
export const getMentorSuccess = (data: any) => ({
  type: GET_MENTOR_SUCCESS,
  payload: data
});
export const getMentorFailure = (err: any) => ({
  type: GET_MENTOR_FAILURE,
  errorReason: err
});



// 액션의 타입 선언
export type MentorAction =
  | ReturnType<typeof addMentorRequest>
  | ReturnType<typeof addMentorSuccess>
  | ReturnType<typeof addMentorFailure>
  | ReturnType<typeof getMentorRequest>
  | ReturnType<typeof getMentorSuccess>
  | ReturnType<typeof getMentorFailure>


// 상태를 위한 타입 선언
export type Mentor = {
  id: number,
  email: string,
  password: string,
  name: string,
  role: string,
  field: string,
  company: string,
  department: string,
  school: string,
  major: string,
  information: string,
  career: string,
  etc: string,
  image: string,
  signup_type: string
}

export type MentorState = {
  mentors: Mentor[],
  errorReason: string
}


// 초깃값 설정
const initialState: MentorState = {
  mentors: [],
  errorReason: '에러 발생'
};


// 리듀서 구현
function mentor(state: MentorState = initialState, action: MentorAction): MentorState{
  switch (action.type) {
    case ADD_MENTOR_REQUEST:
      return {
        ...state
      }
    case ADD_MENTOR_SUCCESS:
      return {
        ...state,
        mentors: [action.payload, ...state.mentors]
      }
    case ADD_MENTOR_FAILURE:
      return {
        ...state,
        errorReason: action.errorReason
      }
    case GET_MENTOR_REQUEST:
      return {
        ...state
      }
    case GET_MENTOR_SUCCESS:
      return {
        ...state,
        mentors: action.payload.data
      }
    case GET_MENTOR_FAILURE:
      return {
        ...state,
        errorReason: action.errorReason
      }
    default:
      return {
        ...state
      };
  }
}


export default mentor;
