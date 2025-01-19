import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx';
import FeaturesSection from './Features.jsx';
import Ticker from './Ticker.jsx';
import ActionSection from './ActionSection.jsx';
import Footer from './Footer.jsx';
import HealthcareChatbot from './HealthcareChatbot.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <Ticker/>
    <ActionSection/>
    <Footer/>
    <HealthcareChatbot/>

  </StrictMode>
)
