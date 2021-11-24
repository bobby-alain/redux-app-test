import axios from 'axios';

// Todo:  get user data, create service and mock it
let service = {
  getUserData: async (userId) => {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return resp.data;
  },

  deleteUser: async (userId) => {
    // const resp = await axios.delete(
    //   `https://jsonplaceholder.typicode.com/users/${userId}`
    // );
    // return resp.data;
  },
};

// get service
const getService = () => {
  return service;
};

// set service
const mock = (mockedService) => {
  service = mockedService;
};

export { getService, mock };
