import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from './redux/index';
import './App.css';
import CoursesPage from './components/CoursesPage';

function App() {
  const user = useSelector((state) => state.userReducer.name);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.loadUserData(1));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <CoursesPage />
        <h1>{user} </h1>
      </header>
    </div>
  );
}

export default App;
