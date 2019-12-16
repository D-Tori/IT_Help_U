// 액션 Type
const ADD_BOARD = 'boards/ADD_BOARD' as const;
const DELETE_BOARD = 'boards/DELETE_BOARD' as const;

// 액션 생성 함수
export const addBoard = (title: string, desc: string, category: Array<string>, user: string) => ({
  type: ADD_BOARD,
  payload: {
    title: title,
    desc: desc,
    category: category,
    view: 0,
    comment: 0,
    like: 0,
    user: user
  }
}); 

// 액션들의 타입 정의

type BoardAction = 
  | ReturnType<typeof addBoard>;


// 상태를 위한 타입 설정
export type Board = {
  id: number,
  title: string,
  desc: string,
  category: Array<string>,
  view: number,
  comment: number,
  like: number,
  user: string
}

type BoardsState = Board[];

// 초기값 설정

const initialState: BoardsState = [
  { id: 1, title: 'SI업체는 어떤곳인가요?', desc: '세상에 이런일이에 나올법한 놀라운 곳입니다.', category: ['react'], view: 0, comment: 0, like: 0, user: 'fepanbr'},
  { id: 2, title: '세상에 이런일이?', desc: '아이번 너프먹으면 나무지기 하겠냐?', category: ['react', 'web', 'debug'], view: 100, comment: 2, like: 10, user: 'hong' },
  { id: 3, title: '리신잘하고 싶어요', desc: '리신을 잘하고 싶은데 가능한가요?', category: ['Angular', 'es7'], view: 25252, comment: 1, like: 100, user: 'whatTheF'}
];


function board (state: BoardsState = initialState, action: BoardAction): BoardsState {
  switch(action.type) {
    case ADD_BOARD:
      const nextId = Math.max(...state.map(board => board.id)) + 1;
      return state.concat({
        id: nextId,
        title: action.payload.title,
        desc: action.payload.desc,
        category: action.payload.category,
        view: action.payload.view,
        comment: action.payload.comment,
        like: action.payload.like,
        user: action.payload.user,
      });
    default:
      return state;
  }
}

export default board;