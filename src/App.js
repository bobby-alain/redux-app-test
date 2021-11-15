import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterAction } from './redux/index';
import './App.css';
import CoursesPage from './components/CoursesPage';
import axios from 'axios';

function App() {
  const [name, setName] = React.useState([]);
  const store = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositMony, withdrawMony } = bindActionCreators(
    counterAction,
    dispatch
  );

  // add try catch
  React.useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`https://swapi.dev/api/people/${1}/`);
        setName(res.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CoursesPage />
        <p>{name}</p>
        <h1 className="App-logo">${store} 🏦</h1>
        <button onClick={() => depositMony(100)}>Deposit</button>
        <button onClick={() => withdrawMony(100)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
