import { AUTHOR_COURSE, TASK_COURSE } from '../types';

export function authorAction(name) {
  return {
    type: AUTHOR_COURSE,
    payload: {
      name,
    },
  };
}

export function taskAction(task) {
  return {
    type: TASK_COURSE,
    payload: {
      task,
    },
  };
}
