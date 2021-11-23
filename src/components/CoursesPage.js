import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorAction } from '../redux/CourseFeature/Actions';

const CoursesPage = () => {
  const nameFromStore = useSelector((state) => state.authorReducer);
  const mapStore = nameFromStore.map((item) => item.name);

  const [course, setCourses] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCourses(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setLoading(true);
      dispatch(authorAction(course));
    }, 1000);
    setLoading(false);
    setCourses('');
  };

  useEffect(() => {
    if (nameFromStore.length > 0) {
      setLoading(false);
    }
  }, [nameFromStore]);

  return (
    <div>
      Items {mapStore.length}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add author"
          value={course}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" disabled={!course.length} />
      </form>
      {loading && <h1>Loading...</h1>}
      {nameFromStore.map((course) => (
        <div key={course.id}>
          <h3>Author: {course.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
