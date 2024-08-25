import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';
import PowerData from './components/PowerData/PowerData';
import NonFungibleToken from './components/NonFungibleToken/NonFungibleToken';
import Dashboard from './components/Dashboard/Dashboard'; 
import Home from './components/Home/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home route without sidebar and right side */}
          <Route path="/" element={<Home />} /> {/* Home as default route */}

          {/* Other routes with full layout */}
          <Route path="/dashboard" element={
            <div className="AppGlass">
              <Sidebar />
              <MainDash />
              <RightSide />
            </div>
          } />
          <Route path="/power-data" element={
            <div className="AppGlass">
              <Sidebar />
              <PowerData />
              <RightSide />
            </div>
          } />
          <Route path="/non-fungible-token" element={
            <div className="AppGlass">
              <Sidebar />
              <NonFungibleToken />
              <RightSide />
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
