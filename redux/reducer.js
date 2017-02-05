function getId(state) {
  return state.todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId);
    }, -1) + 1;
}

export default function reducer(state, action) {
  switch (action) {
    case 'ADD_TODO':
      Object.assign({}, state, {
        todos: [{
          text: action.text,
          complete: false,
          id: getId(state)
        }, ...state.todos]
      });
      break;

    default:
      return state;
  }
}