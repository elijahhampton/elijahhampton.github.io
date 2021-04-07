import React from 'react';
import './styles.css';

import BlockchainSection from '../BlockchainSection/BlockchainSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import HeroSection from '../HeroSection/HeroSection';
import SocialStick from '../SocialStick/SocialStick';


const Home = () => {
  return (
    <div className="home w-100 container-fluid d-flex flex-column justify-content-center">
    <HeroSection />
    <PortfolioSection />
    <BlockchainSection />
    <SocialStick />
    </div>
  )
}

export default Home;