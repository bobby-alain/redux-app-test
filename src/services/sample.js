// import { getService, mock } from './service';
// import axios from 'axios';

// import { bindActionCreators } from 'redux';

// export default mock({
//   async fetchUser() {
//     return new Promise(resolve => {
//       resolve(axios.get(`https://swapi.dev/api/people/${1}/`));
//     });
//   },
// });

// import axios from 'axios';

// class Users {
//   static all() {
//     return axios
//       .get(`https://swapi.dev/api/people/${1}/`)
//       .then(resp => resp.data);
//   }
// }

// export default Users;

// const { depositMony, withdrawMony } = bindActionCreators(
//   counterAction,

//   dispatch
// );

// console.log(store.name);

// React.useEffect(() => {
//   const fetchAPI = async () => {
//     try {
//       const res = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${1}`
//       );
//       setName(res.data.name);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchAPI();
// }, []);
