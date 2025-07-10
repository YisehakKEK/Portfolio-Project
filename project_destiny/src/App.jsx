import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* website pages */
 import Home from './pages/Home.jsx'

import About from './pages/About.jsx'

import Initiatives from './pages/Initiatives.jsx'

import Sponsored from './pages/Sponsored.jsx';

import Commitment from './pages/Commitment.jsx';

import One from './pages/OneT.jsx'

import Donations from './pages/Donation.jsx'

import Contact from './pages/Contact.jsx'  

/* websites components */
import Navbar from './componenets/Navbar.jsx'
import Footer from './componenets/Footer.jsx'
import Top from './componenets/backtoTop.jsx'
import ScrollToTop from './componenets/scrollUp.jsx'

import './App.css'



function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Top/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path ="/special" element={<About/>}/>
        
        <Route path ="/Initiatives" element={<Initiatives/>}/> 

        <Route path ="/sponsor" element={<Sponsored/>}/>

        <Route path ="/commitment" element={<Commitment/>}/>

        <Route path ="/one-time-projects" element={<One/>}/>
        
        <Route path ="/Donations" element={<Donations/>}/>
        
        <Route path ="/contact" element={<Contact/>}/>  
      </Routes>
       <Footer />
   </Router> 
      
    </>
  )
}

export default App
