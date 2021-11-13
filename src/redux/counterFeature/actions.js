export const depositMony = amount => {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
};

export const withdrawMony = amount => {
  return {
    type: 'WITHDRAW',
    payload: amount,
  };
};
