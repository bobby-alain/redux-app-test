import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterAction } from './redux/index';
import './App.css';
import CoursesPage from './components/CoursesPage';

function App() {
  const store = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositMony, withdrawMony } = bindActionCreators(
    counterAction,
    dispatch
  );

  return (
    <div className="App">
      <header className="App-header">
        <CoursesPage />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-logo">${store} 🏦</h1>
        <button onClick={() => depositMony(100)}>Deposit</button>
        <button onClick={() => withdrawMony(100)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
