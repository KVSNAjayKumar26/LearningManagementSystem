import React from 'react'
import { motion } from 'framer-motion'
const Dashboard = () => {
  return (
    <motion.div
    className='dashboard'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <h2>Welcome to the Learning Management System</h2>
        <div className='metrics'>
            <div className='card'>
                <h3>Enrolled Courses</h3>
                <p>5</p>
            </div>
            <div className='card'>
                <h3>Progress</h3>
                <p>80%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Dashboard;