import './featured.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const percentage = 66;

function Featured() {
  return (
    <div><h1 className="month">PY October 2022</h1>
    <div className="featured">
    <div className="enrollmentDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Enrollments</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        23
                    </span>
                    <span className="featuredEnrollmentRate">
                        -20.8% <ArrowDownwardIcon className="icon negative"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="progressBar">
                <h4 class="progressTitle">Total Goal</h4>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        </div>
        <div className="spendingDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Spending</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        $156,987.98
                    </span>
                    <span className="featuredSpendingRate">
                        +11.3% <ArrowUpwardIcon className="icon"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="progressBar">
                <h4 class="progressTitle">Total Goal</h4>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            </div>
        <div className="msgDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Measurable Skill Gains</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        64%
                    </span>
                    <span className="featuredMSGRate">
                        +1.3% <ArrowUpwardIcon className="icon negative"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="progressBar">
                    <h4 class="progressTitle">Total Goal</h4>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
        </div>
    </div>
    </div>
  )
}

export default Featured
