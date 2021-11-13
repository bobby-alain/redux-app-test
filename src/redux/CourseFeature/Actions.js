import { AUTHOR_COURSE, TASK_COURSE } from '../types';

export function authorAction(course) {
  return {
    type: AUTHOR_COURSE,
    payload: course,
  };
}

export function taskAction(task) {
  return {
    type: TASK_COURSE,
    payload: task,
  };
}
