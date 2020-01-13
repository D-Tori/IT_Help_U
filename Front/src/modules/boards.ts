// 액션 Type
const ADD_BOARD = 'boards/ADD_BOARD' as const;
const GET_BOARD_REQUEST = 'GET_BOARD_REQUEST' as const;
const GET_BOARD_SUCCESS = 'GET_BOARD_SUCCESS' as const;
const GET_BOARD_FAILURE = 'GET_BOARD_FAILURE' as const;



// 액션 생성 함수
export const addBoard = (payload: Board) => ({
  type: ADD_BOARD,
  payload: payload
});

export const getBoardRequest = (id?: number) => ({
  type: GET_BOARD_REQUEST,
  id: id
});
export const getBoardSuccess = (payload: any) => (
  {
    type: GET_BOARD_SUCCESS,
    payload: payload
  }
);
export const getBoardFailure = () => ({
  type: GET_BOARD_FAILURE
});

// 액션들의 타입 정의

export type BoardAction =
  | ReturnType<typeof addBoard>
  | ReturnType<typeof getBoardRequest>
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getBoardFailure>


// 상태를 위한 타입 설정
export type Board = {
  id: number,
  title: string,
  descs: string,
  category: Array<string>,
  views: number,
  comments: number,
  likes: number,
  user: string
}


export type BoardsState = {
  boards: Board[];
}

// 초기값 설정

const initialState: BoardsState = {
  boards: []
};


function board(state: BoardsState = initialState, action: BoardAction): BoardsState {

  switch (action.type) {
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
        ...state
      }
    default:
      return { ...state };
  }
}

export default board;
