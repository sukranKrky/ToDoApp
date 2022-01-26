import { type } from '@testing-library/user-event/dist/type'
import {
  ADD_TASK,
  DELETE_ALL_TASKS,
  DELETE_TASK,
  ACTIVE_UPDATE,
} from '../constants/taks'

export const addTask = (id, task, active) => {
  return {
    type: ADD_TASK,
    id,
    task,
    active,
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id,
  }
}

export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL_TASKS,
  }
}

export const activeUpdate = (id, active) => {
  return {
    type: ACTIVE_UPDATE,
    id,
    active,
  }
}
