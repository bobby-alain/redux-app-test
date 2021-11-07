import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import './App.css';

function App() {
  const store = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositMony, withdrawMony } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-logo">${store} 🏦</h1>
        <button onClick={() => depositMony(100)}>Deposit</button>
        <button onClick={() => withdrawMony(100)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
