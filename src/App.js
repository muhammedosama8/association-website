import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from './pages/Home';
import NavBar from './pages/Navbar';
import Footer from './pages/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Talabat from './pages/Talabat';
import Contact from './pages/Contact';
import AllNews from './pages/AllNews';
import New from './pages/New';
import AllMarkets from './pages/AllMarkets';
import Market from './pages/Market';
import Activities from './pages/Activities';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/activities" element={
            <>
            <Activities />
            <Talabat />
            <Contact />
            </>
          } />
          <Route path="/markets" element={<AllMarkets />}  />
          <Route path="/markets/market" element={<Market />}  />
          <Route path="/news" element={<AllNews />}  />
          <Route path="/news/new" element={<New />}  />
          <Route path="/contact-us" element={<Contact />}  />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
