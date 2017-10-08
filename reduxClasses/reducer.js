import {types} from './actions'

const initialState = {
  todos: [ {id: 0, title: 'defaultItem', isCompleted: false} ]
};

export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch(type){
    case types.ADD_ITEM:
      return {
        ...state,
        todos: [
          {
            id: state.todos.reduce((maxId, elem) => elem.id > maxId ? elem.id : maxId) + 1,
            title: payload,
            isCompleted: false
          },
          ...state.todos],
      };
    case types.REMOVE_COMPLETED_ITEMS:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.isCompleted = false
        }),
      };
      break;
    default:
      break;
  }

  return state;
};