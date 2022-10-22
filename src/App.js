import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './app.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          
        </div>
      </div>
    </div>
  );
}

export default App;
