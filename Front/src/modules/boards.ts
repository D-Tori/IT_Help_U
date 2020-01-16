
// 액션 Type

// 보드 추가
export const ADD_BOARD_REQUEST = 'boards/ADD_BOARD_REQUEST' as const;
export const ADD_BOARD_SUCCESS = 'boards/ADD_BOARD_SUCCESS' as const;
export const ADD_BOARD_FAILURE = 'boards/ADD_BOARD_FAILURE' as const;

// 보드 불러오기
export const GET_BOARD_REQUEST = 'boards/GET_BOARD_REQUEST' as const;
export const GET_BOARD_SUCCESS = 'boards/GET_BOARD_SUCCESS' as const;
export const GET_BOARD_FAILURE = 'boards/GET_BOARD_FAILURE' as const;

// 보드 삭제하기
export const DELETE_BOARD_REQUEST = 'boards/DELETE_BOARD_REQUEST' as const;
export const DELETE_BOARD_SUCCESS = 'boards/DELETE_BOARD_SUCCESS' as const;
export const DELETE_BOARD_FAILURE = 'boards/DELETE_BOARD_FAILURE' as const;


// 액션 생성 함수

// 보드 추가
export const addBoardRequest = (data: Board) => ({
  type: ADD_BOARD_REQUEST,
  addData: data
});

export const addBoardSuccess = (data: any) => ({
  type: ADD_BOARD_SUCCESS,
  payload: data
});

export const addBoardFailure = (err: any) => ({
  type: ADD_BOARD_FAILURE,
  err: err
});


// 보드 불러오기
export const getBoardRequest = (payload?: number) => ({
  type: GET_BOARD_REQUEST,
  id: payload
});
export const getBoardSuccess = (data: any) => ({
  type: GET_BOARD_SUCCESS,
  payload: data
});
export const getBoardFailure = (payload: any) => ({
  type: GET_BOARD_FAILURE,
  err: payload
});

// 보드 삭제

export const deleteBoardRequest = (payload: number) => ({
  type: DELETE_BOARD_REQUEST,
  payload: payload
});
export const deleteBoardSuccess = (payload: any) => ({
  type: DELETE_BOARD_SUCCESS,
  payload: payload
});
export const deleteBoardFailure = (payload: any) => ({
  type: DELETE_BOARD_FAILURE,
  payload: payload
});

// 액션들의 타입 정의

export type BoardAction =
  | ReturnType<typeof deleteBoardRequest>
  | ReturnType<typeof deleteBoardSuccess>
  | ReturnType<typeof deleteBoardFailure>
  | ReturnType<typeof addBoardRequest>
  | ReturnType<typeof addBoardSuccess>
  | ReturnType<typeof addBoardFailure>
  | ReturnType<typeof getBoardRequest>
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getBoardFailure>


// 상태를 위한 타입 설정
export type Board = {
  id?: number,
  title: string,
  content: string,
  tags: string[],
  view_count?: number,
  comments?: number[],
  like_count?: number,
  writer: string
}


export type BoardsState = {
  boards: Board[];
  errorReason: string,
  isAddPosted: boolean,
  isAddPosting: boolean,
}

// 초기값 설정

const initialState: BoardsState = {
  boards: [],
  errorReason: '',
  isAddPosted: false,
  isAddPosting: false,
};


function board(state: BoardsState = initialState, action: BoardAction): BoardsState {

  switch (action.type) {
    case ADD_BOARD_REQUEST:
      return {
        ...state,
        isAddPosting: true
      }
    case ADD_BOARD_SUCCESS:
      return {
        ...state,
        isAddPosting: false,
        isAddPosted: true
      };
    case ADD_BOARD_FAILURE:
      return {
        ...state,
        isAddPosting: false,
        isAddPosted: false,
        errorReason: action.err
      }
    case GET_BOARD_REQUEST:
      return {
        ...state,
      };
    case GET_BOARD_SUCCESS:
      return {
        ...state,
        boards: action.payload.data
      };
    case GET_BOARD_FAILURE:
      return {
        ...state,
        errorReason: action.err
      };
    case DELETE_BOARD_SUCCESS:
      return {
        ...state,
        boards: action.payload.data
      };
    case DELETE_BOARD_FAILURE:
      return {
        ...state,
        errorReason: action.payload
      }
    default:
      return { ...state };
  }
}

export default board;
