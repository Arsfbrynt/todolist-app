import { createStore } from 'redux';
import { Task } from './types';

// Define state shape
interface AppState {
  tasks: Task[];
  searchTerm?: string;
}

// Define actions
enum ActionTypes {
  TOGGLE_TASK = 'TOGGLE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CREATE_TASK = 'CREATE_TASK',
  SEARCH_TASKS = 'SEARCH_TASKS',
}

interface ToggleTaskAction {
  type: ActionTypes.TOGGLE_TASK;
  payload: {
    taskId: number;
  };
}

interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  payload: {
    taskId: number;
  };
}

interface CreateTaskAction {
  type: ActionTypes.CREATE_TASK;
  payload: {
    title: string;
  };
}

interface SearchTasksAction {
  type: ActionTypes.SEARCH_TASKS;
  payload: {
    searchTerm: string;
  };
}


type Action = ToggleTaskAction | DeleteTaskAction | CreateTaskAction | SearchTasksAction;

// Define initial state
const initialState: AppState = {
  tasks: [],
};

// Define reducer
const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    case ActionTypes.CREATE_TASK:
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: action.payload.title,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case ActionTypes.SEARCH_TASKS:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

// Create store
export const store = createStore(reducer);

// Define root state type
export type RootState = ReturnType<typeof store.getState>;

// Define root dispatch type
export type AppDispatch = typeof store.dispatch;
