const initialState = {
  count: 0,
};

const reducer = (state = initialState.count, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
