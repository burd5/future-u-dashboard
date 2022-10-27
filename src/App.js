import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import TeamMembers from './pages/team-members/TeamMembers'
import Rindy from './pages/team-members/wfs/Rindy'
import Fredeen from './pages/team-members/wfs/Fredeen'
import Burdette from './pages/team-members/wfs/Burdette'
import Reifschneider from './pages/team-members/wfs/Reifschneider'
import Metz from './pages/team-members/wfs/Metz'
import Deherrera from './pages/team-members/wfs/Deherrera'
import Adams from './pages/team-members/wfs/Adams'
import Huelsmann from './pages/team-members/wfs/Huelsmann'
import Personal from './pages/Personal'


import './app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/teamMembers' element={<TeamMembers/>} />
          <Route path='/Rindy' element={<Rindy/>} />
          <Route path='/Fredeen' element={<Fredeen/>} />
          <Route path='/Burdette' element={<Burdette/>} />
          <Route path='/Reifschneider' element={<Reifschneider/>} />
          <Route path='/Metz' element={<Metz/>} />
          <Route path='/Deherrera' element={<Deherrera/>} />
          <Route path='/Adams' element={<Adams/>} />
          <Route path='/Huelsmann' element={<Huelsmann/>} />
          <Route path='/personal' element={<Personal/>} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
