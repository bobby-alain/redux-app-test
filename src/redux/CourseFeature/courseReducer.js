import * as CREATE_COURSE from './Actions';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      debugger;
      return [
        ...state,
        {
          title: action.course.title,
        },
      ];
    default:
      return state;
  }
}
