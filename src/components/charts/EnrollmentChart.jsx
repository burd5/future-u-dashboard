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
        data: [19,63,103],
        backgroundColor: 'rgb(57,80,108)',
        borderColor: '#555',
        color: 'rgb(57,80,108)',
    }]
}

const dataSpending = {
    labels: ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        data: [76869.28,96811.39,87743.35],
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
          beginAtZero: false,
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
