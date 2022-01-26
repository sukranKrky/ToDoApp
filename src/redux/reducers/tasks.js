import {
  ADD_TASK,
  DELETE_ALL_TASKS,
  DELETE_TASK,
  ACTIVE_UPDATE,
} from '../constants/taks'

const initialState = {
  tasks: [],
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,

        tasks: [
          ...state.tasks,
          {
            id: action.id,
            task: action.task,
            active: action.active,
          },
        ],
      }

    case DELETE_TASK:
      return {
        ...state,

        tasks: state.tasks.filter((tasks) => tasks.id !== action.id),
      }
    case DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      }
    case ACTIVE_UPDATE:
      return {
        ...state,

        tasks: [
          ...state.tasks.map((task) => {
            if (task.id !== action.id) {
              return task
            }
            return {
              ...task,
              active: !task.active,
            }
          }),
        ],
      }

    default:
      return state
  }
}

export default tasks
