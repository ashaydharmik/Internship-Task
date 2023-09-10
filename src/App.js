import React, { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
// import { useTheme } from './Components/utils/Context';
import "./App.css"
function App() {
  // const { isLightTheme } = useTheme();
  return (

      <div className={`App `}>
        <Dashboard />
      </div>

  );
}

export default App;
