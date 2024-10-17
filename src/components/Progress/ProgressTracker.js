import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressTracker = () => {
    const data = {
        labels: ['Course 1', 'Course 2', 'Course 3'],
        datasets: [
            {
                label: 'Progress',
                data: [80, 60, 90],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', 
                    'rgba(255, 206, 86, 0.6)', 
                    'rgba(153, 102, 255, 0.6)'
                ],
            },
        ],
    };

    useEffect(() => {
        return () => {
            // Cleanup is not necessary for react-chartjs-2, 
            // as it handles chart destruction automatically.
        };
    }, []);

    return (
        <div className='progress-tracker'>
            <h2>Progress Tracker</h2>
            <Bar data={data} />
        </div>
    );
};

export default ProgressTracker;
