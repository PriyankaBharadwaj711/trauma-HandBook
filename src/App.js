

import './App.css';
import PersistentDrawerLeft from './Components/Drawer'
import TemporaryDrawer from './Components/TempDrawer'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
function App() {
  return (
    < >
    {/* <Router>

      <Navbar/>
      <Switch>
        <Route path ='/' />
      </Switch>
    </Router> */}
      <header className="App-header">
       
        <p>
           <PersistentDrawerLeft/>
           {/* <TemporaryDrawer/> */}

        </p>
        
      </header>

      
    </>
  );
}

export default App;
