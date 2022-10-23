import './featured.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Featured() {
  return (
    <div><h1 className="month">PY October 2022</h1>
    <div className="featured">
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
    </div>
    </div>
  )
}

export default Featured
