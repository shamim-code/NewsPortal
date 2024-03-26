import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Sports from './pages/Sports';
import Desh from './pages/Desh';
import Entertainment from './pages/Entertainment';
import Business from './pages/Business';
import International from './pages/International';
import Health from './pages/Health';
import Details from './pages/Details';
import Admin from './pages/Admin';
import NotFound from './components/NotFound';

export default function App() {
  
  return (
    
    <BrowserRouter>

      <Routes>

        <Route path='/' element= {<Home />} />

        <Route path='/Sports' element= {<Sports />} />

        <Route path='/Desh' element= {<Desh />} />

        <Route path='/Entertainment' element= {<Entertainment />} />

        <Route path='/Business' element= {<Business />} />

        <Route path='/International' element= {<International />} />

        <Route path='/Health' element= {<Health />} />

        <Route path='/details/:postTitle' element= {<Details />} />

        <Route path='/panel-admin' element= {<Admin />} />

        <Route path='*' element= {<NotFound />} />
        
      </Routes>
    
    </BrowserRouter>
  )
}
