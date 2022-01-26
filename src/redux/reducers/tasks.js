import { ADD_TASK, DELETE_ALL_TASKS, DELETE_TASK } from "../constants/taks";

const initialState = {
  tasks: [
    {
      id: 1,
      active: true,
      task: "Görev 1 ",
    },
    {
      id: 2,
      active: false,
      task: "Görev 2 ",
    },
    {
      id: 3,
      active: true,
      task: "Görev 3 ",
    },
    {
      id: 4,
      active: true,
      task: "Görev 4 ",
    },
    {
      id: 5,
      active: false,
      task: "Görev 5 ",
    },
    {
      id: 6,
      active: true,
      task: "Görev 6 ",
    },
  ],
};

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
      };

    case DELETE_TASK:
      return {
        ...state,

        tasks: state.tasks.filter((tasks) => tasks.id !== action.id),
      };
    case DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};

export default tasks;
