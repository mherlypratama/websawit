import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';
import PowerData from './components/PowerData/PowerData';
import NonFungibleToken from './components/NonFungibleToken/NonFungibleToken';
import Dashboard from './components/Dashboard/Dashboard'; // Assuming you have a Dashboard component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/power-data" element={<PowerData />} />
            <Route path="/non-fungible-token" element={<NonFungibleToken />} />
          </Routes>
          <RightSide/>
        </Router>
      </div>
    </div>
  );
}

export default App;
