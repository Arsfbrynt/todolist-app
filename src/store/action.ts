import { Action } from 'redux';

export enum ActionTypes {
  TOGGLE_TASK = 'TOGGLE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CREATE_TASK = 'CREATE_TASK',
  SEARCH_TASKS = 'SEARCH_TASKS',
}

export interface ToggleTaskAction extends Action<ActionTypes.TOGGLE_TASK> {
    type: ActionTypes.TOGGLE_TASK;
    payload: {
      taskId: number;
    };
  }
  

export interface DeleteTaskAction extends Action<ActionTypes.DELETE_TASK> {
  payload: {
    taskId: number;
  };
}

export interface CreateTaskAction extends Action<ActionTypes.CREATE_TASK> {
  payload: {
    title: string;
  };
}

export interface SearchTasksAction extends Action<ActionTypes.SEARCH_TASKS> {
  payload: {
    searchTerm: string;
  };
}

export const toggleTask = (taskId: number): ToggleTaskAction => ({
  type: ActionTypes.TOGGLE_TASK,
  payload: {
    taskId,
  },
});

export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: ActionTypes.DELETE_TASK,
  payload: {
    taskId,
  },
});

export const createTask = (title: string): CreateTaskAction => ({
  type: ActionTypes.CREATE_TASK,
  payload: {
    title,
  },
});

export const searchTasks = (searchTerm: string): SearchTasksAction => ({
  type: ActionTypes.SEARCH_TASKS,
  payload: {
    searchTerm,
  },
});
