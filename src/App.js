import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from './pages/Home';
import NavBar from './pages/Navbar';
import Footer from './pages/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './pages/Contact';
import AllNews from './pages/AllNews';
import New from './pages/New';
import AllMarkets from './pages/AllMarkets';
import Market from './pages/Market';
import Offers from './pages/Offers';
import AllActivities from './pages/AllActivities';
import Error404 from './common/Error404';
import { useDispatch } from 'react-redux';
import SocialService from './services/SocialService';
import { setSocial } from './store/actions/SocialActions';
import Privacy from './pages/Privacy';
import Offer from './pages/Offers/Offer';

function App() {
  const dispatch = useDispatch()
  const socialService = new SocialService()
  useEffect(()=>{
    AOS.init();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    socialService.getList().then(res=>{
      let data = res.data.data
      dispatch(setSocial(data))
    })
  },[])

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/activities" element={<AllActivities />} />
          <Route path="/markets" element={<AllMarkets />}  />
          <Route path="/markets/market" element={<Market />}  />
          <Route path="/offers" element={<Offers />}  />
          <Route path="/offers/offer" element={<Offer />}  />
          <Route path="/news" element={<AllNews />}  />
          <Route path="/news/new" element={<New />}  />
          <Route path="/contact-us" element={<Contact />}  />
          <Route path="/privacy" element={<Privacy />}  />
          <Route path="*" element={<Error404 />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
