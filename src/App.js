import React, {Fragment} from 'react';
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import './styles/Header.css';
import './styles/colors.css';
import './styles/utilities.css'

function App() {
  return (
    <Fragment>
      <HeaderBar/>
      <NavBar/>
      <Slider/>
    </Fragment>
   

  )
  
  
}

export default App;
