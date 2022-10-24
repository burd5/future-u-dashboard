import './enrollmentChart.css'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const dataEnrollments = {
    labels: ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        data: [21,34,26,42,32],
        backgroundColor: 'rgb(57,80,108)',
        borderColor: '#555',
        color: 'rgb(57,80,108)',
    }]
}

const dataSpending = {
    labels: ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        data: [183345,135678,123876,195222,112200],
        borderColor: '#555',
        color: 'rgb(57,80,108)',
        fill: true,
        backgroundColor: 'rgb(57,80,108)',
    }],
}

const options = {
    responsive: true,
    maintainAspectRatio: false, 
    animation: {
      duration: 2000,
      easing: "easeInBounce",
    },
    plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
        tooltip: {
            titleFont: {
                size: 20,
            },
            bodyFont: {
                size: 20,
            },
            displayColors: false,
        }
    },
    scales: {
        x: {
          grid: {
            display: false,
            borderColor: 'black'
          },
          ticks: {
          font: {
            size: 22,
            weight: 500,
          },
          color: 'rgb(57,80,108)'
        }
        },
        y: {
          grid: {
            display: false,
            borderColor: 'black'
          },
          ticks: {
            font: {
              size: 22,
              weight: 500,
            },
            color: 'rgb(57,80,108)'
          },
          beginAtZero: true,
        },
      },
    tension: 0.4,
}

function EnrollmentChart() {
  return (
    <div className="teamCharts">
        <h3 className="chartTitleEnrollments">PY 2022-2023 Team Enrollments</h3>
        <div className="charts">
            <Line data={dataEnrollments} options={options} type="monotone"/>
        </div>
        <h3 className="chartTitleSpending">PY 2022-2023 Team Spending</h3>
        <div className="charts">
            <Line data={dataSpending} options={options}/>
        </div>
    </div>
  )
}

export default EnrollmentChart
