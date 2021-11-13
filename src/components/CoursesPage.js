import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseAction } from '../redux/index';

const CoursesPage = () => {
  const [courses, setCourses] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const store = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handleChange = e => {
    setCourses(e.target.value);
  };
  console.log(store);
  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    dispatch(courseAction.createCourse(courses));
    setLoading(false);
    setCourses('');
  };

  return (
    <div>
      CoursesPage {courses}
      <form onSubmit={handleSubmit}>
        <input type="text" value={courses} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      {loading && <h1>Loading...</h1>}
      {/* {store.courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))} */}
    </div>
  );
};

export default CoursesPage;
