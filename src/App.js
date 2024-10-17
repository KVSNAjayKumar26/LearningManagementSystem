import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CourseList from './components/Courses/CourseList'
import CreateCourse from './components/Courses/CreateCourse'
import CourseDetails from './components/Courses/CourseDetails'
import ProgressTracker from './components/Progress/ProgressTracker'
import '../src/styles/global.scss';
const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/courses' element={<CourseList />} />
          <Route path='/courses/new' element={<CreateCourse />} />
          <Route path='/courses/:id' element={<CourseDetails />} />
          <Route path='/progress' element={<ProgressTracker />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App