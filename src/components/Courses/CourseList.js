import React from 'react'
import { Link } from 'react-router-dom';

const CourseList = () => {
    const courses = [
        { id: 1, title: 'React for Beginners', description: 'Learn React from scratch' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS' },
    ];
  return (
    <div className='course-list'>
        <h2>Available Courses</h2>
        <ul>
            {courses.map(course => (
                <li key={course.id}>
                    <Link to={`/courses/${course.id}`}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default CourseList;