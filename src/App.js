

import './App.css';
import PersistentDrawerLeft from './Components/Drawer'
import TemporaryDrawer from './Components/TempDrawer'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
function App() {
  return (
    < >
    
      <header className="App-header">
       
        
           <PersistentDrawerLeft/>
           {/* <TemporaryDrawer/> */}
      </header>
    </>
  );
}

export default App;
