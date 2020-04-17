import React, {Fragment} from 'react';
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Routes from './Routes'
import './styles/Header.css';
import './styles/colors.css';
import './styles/utilities.css'
import './styles/grid_system.css'
import './styles/form.css'
import './styles/about.css'

function App() {
  return (
    <Fragment>
      <HeaderBar/>
      <NavBar/>
     <Routes/>
    </Fragment>
   

  )
  
  
}

export default App;
