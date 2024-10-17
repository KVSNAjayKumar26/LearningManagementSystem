import React, { useState } from 'react'

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.peventDefault();
        alert(`Course Created: ${title}`);
    };

  return (
    <div className='create-course'>
        <h2>Create new Course</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type='submit'>Create Course</button>
        </form>
    </div>
  );
};

export default CreateCourse;