import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import SignIn from './SignIn';
import HeroSection from './HeroSection';
import FeaturesSection from './Features';
import Ticker from './Ticker';
import ActionSection from './ActionSection';
import Footer from './Footer';
import HealthcareChatbot from './HealthcareChatbot';
import HospitalSearch from './HospitalSearch';

function App() {
  return (
    <>
      <Header /> {/* Navbar will be shown on all pages */}
      <Routes>
        {/* Updated root path */}
        <Route 
          path="/" 
          element={
            <div>
              <HeroSection />
              <FeaturesSection />
              <Ticker />
              <ActionSection />
              {/* Make sure this component is properly visible */}
              <div style={{ margin: '2rem 0' }}>
                <HospitalSearch />
              </div>
              <Footer />
              <HealthcareChatbot />
            </div>
          } 
        />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/search" element={<HospitalSearch />} /> {/* Still available on /search */}
      </Routes>
    </>
  );
}

export default App;
