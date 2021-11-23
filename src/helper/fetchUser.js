export const fetchUser = async (userId) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export functions add 2 numbers togethers
export const addTwoNumbers = (a, b) => {
  return a + b;
};
