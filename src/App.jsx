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

function App() {
  return (
    <>
      <Header /> {/* Navbar will be shown on all pages */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <Ticker />
              <ActionSection />
              <Footer />
              <HealthcareChatbot />
            </>
          } 
        />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
