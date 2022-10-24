import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import TeamMembers from './pages/team-members/TeamMembers'

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
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
