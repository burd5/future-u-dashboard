import './wfs.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HeatherChart from '../../../components/charts/HeatherChart'
import 'react-circular-progressbar/dist/styles.css';

function Huelsmann() {
  return (
    <div className="huelsmann">
        <h1>Heather Huelsmann</h1>
    <div className="featured">
    <div className="enrollmentDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Enrollments</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        9
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
            <span className="featuredTitle">Spending</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        $9,366.15
                    </span>
                    <span className="featuredSpendingRate">
                        -42.8% <ArrowDownwardIcon className="icon"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="progressBar">
                    <h4 class="progressTitle">Team Rank</h4>
                    <img class="medal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8ISxBnHI3Fq25EzvgwudCuf6A7f4ZE-Ozw&usqp=CAU" alt="first place" />

            </div>
            </div>
        <div className="msgDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Placements</span>
                <div className="featuredContainer">
                    <span className="featuredNumber">
                        1
                    </span>
                    <span className="featuredMSGRate">
                        -37.5% <ArrowDownwardIcon className="icon negative"/>
                    </span>
                </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="progressBar">
        <h4 class="progressTitle">Team Rank</h4>
                    <img class="medal" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Trophy-and-Medals-PNG/Third_Place_Medal_Badge_Clipart_Image.png?m=1555462978" alt="third place" />
        </div>
        </div>
    </div>
    <HeatherChart/>
    </div>
  )
}

export default Huelsmann