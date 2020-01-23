// 액션 type
export const ADD_MENTOR_REQUEST = "users/ADD_MENTOR_REQUEST" as const;
export const ADD_MENTOR_SUCCESS = "users/ADD_MENTOR_SUCCESS" as const;
export const ADD_MENTOR_FAILURE = "users/ADD_MENTOR_FAILURE" as const;

export const ADD_USER_REQUEST = "users/ADD_USER_REQUEST" as const;
export const ADD_USER_SUCCESS = "users/ADD_USER_SUCCESS" as const;
export const ADD_USER_FAILURE = "users/ADD_USER_FAILURE" as const;

export const GET_MENTOR_REQUEST = "users/GET_MENTOR_REQUEST" as const;
export const GET_MENTOR_SUCCESS = "users/GET_MENTOR_SUCCESS" as const;
export const GET_MENTOR_FAILURE = "users/GET_MENTOR_FAILURE" as const;

export const LOGIN_USER_REQUEST = "users/LOGIN_USER_REQUEST" as const;
export const LOGIN_USER_SUCCESS = "users/LOGIN_USER_SUCCESS" as const;
export const LOGIN_USER_FAILURE = "users/LOGIN_USER_FAILURE" as const;


// 액션 생성 함수

// 회원 로그인 액션 생성 함수
export const loginUserRequest = (payload: UserFormType) => ({
  type: LOGIN_USER_REQUEST,
  addData: payload
});

export const loginUserSuccess = (data: any) => ({
  type: LOGIN_USER_SUCCESS,
  payload: data
});

export const loginUserFailure = (error: any) => ({
  type: LOGIN_USER_FAILURE,
  errorReason: error
});

// 회원가입 액션 생성 함수
export const addUserRequest = (payload: UserFormType) => ({
  type: ADD_USER_REQUEST,
  addData: payload
});

export const addUserSuccess = (data: any) => ({
  type: ADD_USER_SUCCESS,
  payload: data
});

export const addUserFailure = (error: any) => ({
  type: ADD_USER_FAILURE,
  errorReason: error
});

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
export type UserAction =
  | ReturnType<typeof addMentorRequest>
  | ReturnType<typeof addMentorSuccess>
  | ReturnType<typeof addMentorFailure>
  | ReturnType<typeof getMentorRequest>
  | ReturnType<typeof getMentorSuccess>
  | ReturnType<typeof getMentorFailure>
  | ReturnType<typeof addUserRequest>
  | ReturnType<typeof addUserSuccess>
  | ReturnType<typeof addUserFailure>
  | ReturnType<typeof loginUserRequest>
  | ReturnType<typeof loginUserSuccess>
  | ReturnType<typeof loginUserFailure>


// 상태를 위한 타입 선언
export type Mentor = {
  id: number,
  email: string,
  name: string,
  role: string,
  field: string,
  company: string,
  department: string,
  information: string,
  career: string,
  etc: string,
  image: string,
}

export type Mentee = {
  id: number,
  email: string,
  name: string,
  nickname?: string,
  school: string,
  major: string,
  information: string,
  etc: string,
  image: string,
}

export type UserFormType = {
  email: string,
  name?: string,
  password: string,
}

export type CurrentUserType = {
  name: string,
  nickname?: string,
  email: string,
}


export type MentorState = {
  mentors: Mentor[],
  mentee: Mentee[],
  me: CurrentUserType | null,
  errorReason: string,
  isSigningUp: boolean,
  isSignedUp: boolean,
  isLoging: boolean,
  isLoggedin: boolean,
}


// 초깃값 설정
const initialState: MentorState = {
  mentors: [],
  mentee: [],
  me: null,
  errorReason: '',
  isSigningUp: false,
  isSignedUp: false,
  isLoging: false,
  isLoggedin: false,
};


// 리듀서 구현
function reducer(state: MentorState = initialState, action: UserAction): MentorState{
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
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoging: true
      }
    case LOGIN_USER_SUCCESS:
      if(action.payload.data.result === 'ok') {
        localStorage.setItem('token', action.payload.data.token);
        console.log('token : ',localStorage.token);
      }
      return {
        ...state,
        isLoggedin: true,
        isLoging: false,
        me: action.payload.data,
      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoging: false,
        isLoggedin: false,
        errorReason: action.errorReason
      }
    case GET_MENTOR_REQUEST:
      return {
        ...state,
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
      case ADD_USER_REQUEST:
      return {
        ...state,
        isSigningUp: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
      };
    case ADD_USER_FAILURE:
    return {
      ...state,
      isSigningUp: false,
      errorReason: action.errorReason
    }
    default:
      return {
        ...state
      };
  }
}


export default reducer;
