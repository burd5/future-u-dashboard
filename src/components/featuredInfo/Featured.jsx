import './featured.css'
import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const placementPercentage = 21;
const enrollmentPercentage = 37;
const spendingPercentage = 20;

function Featured() {
  return (
    <div><h1 className="month">Young Adult Team - September 2022</h1>
    <div className="featured">
    <div className="enrollmentDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Enrollments</span>
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
                <h4 class="progressTitle">Total Goal</h4>
                <CircularProgressbar value={enrollmentPercentage} text={`${enrollmentPercentage}%`} />
        </div>
        </div>
        <div className="spendingDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Spending</span>
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
                <h4 class="progressTitle">Total Goal</h4>
                <CircularProgressbar value={spendingPercentage} text={`${spendingPercentage}%`} />
            </div>
            </div>
        <div className="msgDiv">
        <div className="featuredItem">
            <span className="featuredTitle">Placements</span>
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
                    <h4 class="progressTitle">Total Goal</h4>
                    <CircularProgressbar value={placementPercentage} text={`${placementPercentage}%`} />
                    </div>
        </div>
    </div>
    </div>
  )
}

export default Featured
