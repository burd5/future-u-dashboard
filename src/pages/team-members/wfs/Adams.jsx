import './wfs.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import 'react-circular-progressbar/dist/styles.css';
import JoshChart from '../../../components/charts/JoshChart'


function Adams() {
  return (
    <div className="adams">
        <h1>Joshua Adams</h1>
        <div className="featured">
    <div className="enrollmentDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Monthly Enrollments</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        40
                    </span>
                    <span className="featuredEnrollmentRate">
                        -10% <ArrowDownwardIcon className="icon negative"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="progressBar">
                    <h4 class="progressTitle">Team Rank</h4>
                    <img class="medal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8ISxBnHI3Fq25EzvgwudCuf6A7f4ZE-Ozw&usqp=CAU" alt="no medal" />
        </div>
        </div>
        <div className="spendingDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Monthly Spending</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        $87,743.35
                    </span>
                    <span className="featuredSpendingRate">
                        -9.37% <ArrowDownwardIcon className="icon"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="progressBar">
                    <h4 class="progressTitle">Team Rank</h4>
                    <img class="medal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8ISxBnHI3Fq25EzvgwudCuf6A7f4ZE-Ozw&usqp=CAU" alt="no medal" />
            </div>
            </div>
        <div className="msgDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Monthly Placements</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        5
                    </span>
                    <span className="featuredMSGRate">
                        -37.5% <ArrowDownwardIcon className="icon negative"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="progressBar">
                    <h4 class="progressTitle">Team Rank</h4>
                    <img class="medal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8ISxBnHI3Fq25EzvgwudCuf6A7f4ZE-Ozw&usqp=CAU" alt="no medal" />
                    </div>
        </div>
    </div>
    <JoshChart/>
    </div>
  )
}

export default Adams
