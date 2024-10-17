import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams(); // Retrieve the course ID from URL

    // Simulating a fetch operation based on course ID
    const courses = [
        { id: 1, title: 'React for Beginners', description: 'Learn React from scratch', modules: ['Introduction', 'Components', 'State & Props'] },
        { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS', modules: ['Closures', 'Asynchronous JS', 'Design Patterns'] },
    ];

    // Find the course based on the ID
    const course = courses.find(course => course.id === parseInt(id));

    // Check if course exists
    if (!course) {
        return <div>Course not found!</div>;
    }

    return (
        <div className='course-details'>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h3>Modules</h3>
            <ul>
                {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetails;
