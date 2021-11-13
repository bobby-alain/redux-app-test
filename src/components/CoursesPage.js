import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseAction } from '../redux/index';
import { bindActionCreators } from 'redux';

const CoursesPage = () => {
  const [course, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const store = useSelector(state => state.authorReducer);
  const dispatch = useDispatch();
  const { authorAction, taskAction } = bindActionCreators(
    courseAction,
    dispatch
  );

  const handleChange = e => {
    setCourses(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    authorAction(course);
    taskAction(course);
    setLoading(false);
    setCourses('');
  };

  return (
    <div>
      CoursesPage {course}
      <form onSubmit={handleSubmit}>
        <input type="text" value={course} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      {loading && <h1>Loading...</h1>}
      {store.map(course => (
        <div key={course.id}>Author: {course.name}</div>
      ))}
    </div>
  );
};

export default CoursesPage;
