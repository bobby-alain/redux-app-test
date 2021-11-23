import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from './redux/index';
import './App.css';
import CoursesPage from './components/CoursesPage';
import GetUser from './components/GetUser';

function App() {
  const user = useSelector((state) => state.userReducer.name);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.loadUserData(1));
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div className="App-header">
          <CoursesPage />
        </div>

        <div className="App-header">
          <h1>{user ? user : 'User Not found'} </h1>
        </div>

        <div className="App-header">
          <GetUser />
        </div>
      </header>
    </div>
  );
}

export default App;
