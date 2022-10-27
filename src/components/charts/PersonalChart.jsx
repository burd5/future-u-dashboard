import './enrollmentChart.css'
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

const labels = [ 'Jul 21', 'Aug 21', 'Sept 21', 'Oct 21', 'Nov 21', 'Dec 21', 'Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sept 22', 'Oct 22'];

export const enrollmentData = {
  labels,
  datasets: [
    {
      label: 'Enrollments',
      data: [4, 2, 20, 10, 7, 3, 7, 6, 7, 14, 15, 6, 0, 0, 5],
      backgroundColor: 'rgba(57,80,108, 0.5)',
    },
    {
      type: 'line',
      label: 'Goal',
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 7, 7, 7],
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
        data: [510,528,9173,12206.38,19632.77,16804.23,26195.64,6458.5,38361.01,24332.2,28147.58,102631.70,80583.97,25561.96, 2872.02],
        backgroundColor: 'rgba(57,80,108, 0.5)',
      },
      {
        type: 'line',
        label: 'Goal',
        data: [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 25000, 25000, 25000],
        backgroundColor: 'red',
        borderColor: 'red'
      }
    ],
  };

function PersonalChart() {
  return (
    <div className="teamCharts">
    <h3 className="chartTitleEnrollments">Historical Enrollments</h3>
        <div className="charts">
            <Bar options={options} data={enrollmentData} />
        </div>
    <h3 className="chartTitleEnrollments">Historical Spending</h3>
    <div className="charts">
        <Bar options={options} data={spendingData} />
    </div>
    </div>
  )
}


export default PersonalChart