import { AUTHOR_COURSE, TASK_COURSE } from '../types';
let id = 1;

const initialState = {
  author: [],
  tasks: [{ title: 'Book number 1' }, { title: 'Book number 2' }],
};

export const authorReducer = (state = initialState.author, action) => {
  switch (action.type) {
    case AUTHOR_COURSE:
      const newAuthor = { id: id++, ...action.payload };
      return [...state, newAuthor];
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
