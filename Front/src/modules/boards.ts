// 액션 Type

// 보드 추가
export const ADD_BOARD_REQUEST = 'boards/ADD_BOARD_REQUEST' as const;
export const ADD_BOARD_SUCCESS = 'boards/ADD_BOARD_SUCCESS' as const;
export const ADD_BOARD_FAILURE = 'boards/ADD_BOARD_FAILURE' as const;

// 보드 불러오기
export const GET_BOARD_REQUEST = 'boards/GET_BOARD_REQUEST' as const;
export const GET_BOARD_SUCCESS = 'boards/GET_BOARD_SUCCESS' as const;
export const GET_BOARD_FAILURE = 'boards/GET_BOARD_FAILURE' as const;



// 액션 생성 함수

// 보드 추가
export const addBoardRequest = (payload: Board) => ({
  type: ADD_BOARD_REQUEST,
  addBoardData: payload
});

export const addBoardSuccess = (data: Board) => ({
  type: ADD_BOARD_SUCCESS,
  payload: data
});

export const addBoardFailure = (error: any) => ({
  type: ADD_BOARD_FAILURE,
  errorReason: error
});


// 보드 불러오기
export const getBoardRequest = (id?: number) => ({
  type: GET_BOARD_REQUEST,
  id: id
});
export const getBoardSuccess = (data: any) => ({
  type: GET_BOARD_SUCCESS,
  payload: data
});
export const getBoardFailure = (err: any) => ({
  type: GET_BOARD_FAILURE,
  errorReason: err
});

// 액션들의 타입 정의

export type BoardAction =
  | ReturnType<typeof addBoardRequest>
  | ReturnType<typeof addBoardSuccess>
  | ReturnType<typeof addBoardFailure>
  | ReturnType<typeof getBoardRequest>
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getBoardFailure>


// 상태를 위한 타입 설정
export type Board = {
  id: number,
  title: string,
  content: string,
  category: string[],
  views: number,
  comments: number[],
  likes: number,
  user: string
}


export type BoardsState = {
  boards: Board[];
  errorReason: string
}

// 초기값 설정

const initialState: BoardsState = {
  boards: [],
  errorReason: ''
};


function board(state: BoardsState = initialState, action: BoardAction): BoardsState {

  switch (action.type) {
    case ADD_BOARD_REQUEST:
      return {
        ...state
      }
    case ADD_BOARD_SUCCESS:
      return {
        ...state,
        boards: [action.payload, ...state.boards]
      };
    case ADD_BOARD_FAILURE:
      return {
        ...state,
        errorReason: action.errorReason
      }
    case GET_BOARD_REQUEST:
      return {
        ...state
      }
    case GET_BOARD_SUCCESS:
      return {
        ...state,
        boards: action.payload.data
      };
    case GET_BOARD_FAILURE:
      return {
        ...state,
        errorReason: action.errorReason
      }
    default:
      return { ...state };
  }
}

export default board;
