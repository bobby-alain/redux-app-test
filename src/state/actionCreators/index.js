export const depositMony = amount => {
  return dispatch => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };
};

export const withdrawMony = amount => {
  return dispatch => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    });
  };
};
