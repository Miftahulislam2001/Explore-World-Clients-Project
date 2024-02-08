import React from 'react';
import Home from './Pages/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavSection from './components/NavSection';

const App = () => {
  return (
    <div>
      <NavSection/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
