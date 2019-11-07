import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  ADD_DATA,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  DELETE_DATA,
  DELETE_DATA_FAILURE,
  DELETE_DATA_SUCCESS
} from '../constants/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
    case 'RESEND_DATA_SUCCESS':
    return action.todos.map((item)=>{
      item.sent = true;
      return item
    })

    case ADD_DATA:
    return [
      ...state,
      {
        id: action.id,
        task: action.task,
        sent: true
      }
    ]

    case ADD_DATA_SUCCESS:
    return state

    case ADD_DATA_FAILURE:
    return state.map((item)=>{
      console.log(item.id === action.id);
      if(item.id === action.id){
        item.sent = false;
      }
      return item
    })

    case DELETE_DATA:
    return state.filter((item) => item.id !== action.id)

    case DELETE_DATA_SUCCESS:
    return state

    case LOAD_DATA_FAILURE:
    case DELETE_DATA_FAILURE:
    default:
    return state
  }
}

export default todos
