import React, {Fragment} from 'react';
import HeaderBar from './components/Nav/HeaderBar'
import Footer from './components/footer'
import Routes from './Routes'

import './styles/utilities.css'

import './styles/Header.css';
import './styles/colors.css';
import './styles/grid_system.css'


import './styles/footer.css'
import './styles/about.css'
import './styles/services.css'
import './styles/quote.css'

function App() {
  return (
    <Fragment>
      <HeaderBar/>
    
     <Routes/>
     <Footer/>
    </Fragment>
   

  )
  
  
}

export default App;
