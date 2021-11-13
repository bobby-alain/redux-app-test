import { AUTHOR_COURSE, TASK_COURSE } from '../types';

const initialState = {
  author: [
    { id: 1, name: 'Steve' },
    { id: 2, name: 'Bobby' },
  ],
  tasks: [{ title: 'Book number 1' }, { title: 'Book number 2' }],
};

export const authorReducer = (state = initialState.author, action) => {
  switch (action.type) {
    case AUTHOR_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case TASK_COURSE:
      return [...state, action.payload];

    default:
      return state;
  }
};
