import './enrollmentChart.css'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: true, 
    animation: {
    duration: 2000,
    easing: "easeInBounce",
    },
    layout: {
        padding: 40,
    },
  plugins: {
    legend: {
      position: 'top',
      display: true,
      labels: {
        font: {
            size: 18,
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        min: 0,
        max: 20,
        stepSize: 1,
        font: {
            size: 22,
            weight: 500,
          },
      }
    },
    x: {
        ticks: {
        font: {
            size: 22,
            weight: 500,
          },
    }}
}};

const labels = [ 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const enrollmentData = {
  labels,
  datasets: [
    {
      label: 'Enrollments',
      data: [5,5,7,6,9,5,8,7,10,4,6,9],
      backgroundColor: 'rgba(57,80,108, 0.5)',
    },
    {
      type: 'line',
      label: 'Goal',
      data: [7, 7, 7, 7,7, 7, 7, 7, 7, 7, 7, 7],
      backgroundColor: 'red',
      borderColor: 'red'
    }
  ],
};

export const spendingData = {
    labels,
    datasets: [
      {
        label: 'Spending',
        data: [20234,8738,21000,8400,16899,23002,16032,22456,11245,9765,13987,7435],
        backgroundColor: 'rgba(57,80,108, 0.5)',
      },
      {
        type: 'line',
        label: 'Goal',
        data: [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000],
        backgroundColor: 'red',
        borderColor: 'red'
      }
    ],
  };

function BethChart() {
  return (
    <div className="teamCharts">
    <h3 className="chartTitleEnrollments">PY 2022-2023 Enrollments</h3>
        <div className="charts">
            <Bar options={options} data={enrollmentData} />
        </div>
    <h3 className="chartTitleEnrollments">PY 2022-2023 Spending</h3>
    <div className="charts">
        <Bar options={options} data={spendingData} />
    </div>
    </div>
  )
}


export default BethChart