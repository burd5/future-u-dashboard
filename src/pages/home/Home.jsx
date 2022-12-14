import './home.css'
import React from 'react';

import Featured from '../../components/featuredInfo/Featured'
import EnrollmentChart from '../../components/charts/EnrollmentChart'


function Home() {
  return (
    <div className="home">
        <Featured />
        <EnrollmentChart />
    </div>
  )
}

export default Home
