import React, { useState } from 'react';
import './styles.css';

import { useMediaQuery } from 'react-responsive'
import ContactMe from './Modal/ContactMe';
import { useRouter } from '../../hooks/useRouter';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

import LupaHome from '../../images/LupaHome.png';
import LupaDashboard from '../../images/LupaDashboard.png'
import LupaCheckout from '../../images/LupaCheckout.png'
import MyNFT from '../../images/MyNFT.png'
import VainClothing from '../../images/VainClothing.png'
import EthGraphic from '../../images/eth-graphic.png';
import ServiceOfferings from '../ServiceOfferings/ServiceOfferings';
import LupaWebsite from '../../images/Lupa.png';
import Footer from '../Footer/Footer';

const PORTFOLIO_PHOTOS = [
  {
    title: 'Lupa: A Social Networking Fitness Application',
    description: 'React Native, Redux, Typescript, Google Cloud Platform, and Stripe',
    imgSource: [LupaHome, LupaDashboard],
    mockupType: 'phone',
    numItems: 2,
    link: 'https://github.com/elijahhampton/Lupa',
  },
  {
    title: 'Lupa Checkout: A Responsive Mobile Checkout Page',
    description: 'React and Google Cloud Platform',
    imgSource: [LupaCheckout],
    mockupType: 'phone',
    numItems: 1,
    link: 'https://github.com/elijahhampton/lupa-web'
  },
  {
    title: 'MyNFT: A Blockchain Based Website for Purchasing Influencer NFTs',
    description: 'React, Redux, Ethereum, Web3, and Typescript',
    imgSource: [MyNFT],
    mockupType: 'computer',
    numItems: 1,
    link: 'https://github.com/elijahhampton/my-nft-ui',
  },
  {
    title: 'Vain Clothing: A Clothing Ecommerce Brand',
    description: 'React, Redux, Google Cloud Platform, and Stripe',
    imgSource: [VainClothing],
    mockupType: 'computer',
    numItems: 1,
    link: 'https://github.com/elijahhampton/vainclothing',
  },
  {
    title: 'Lupa Website: A Responsive Website for the Lupa Mobile App',
    description: 'React, Redux, and Google Cloud Platform',
    imgSource: [LupaWebsite],
    mockupType: 'computer',
    numItems: 1,
    link: 'https://github.com/elijahhampton/lupa',
  },
]

const Home = () => {
  const [contactMeIsOpen, setContactMeIsOpen] = useState(false);

  const handleOnOpenContactModal = () => setContactMeIsOpen(true);
  const handleOnCloseContactModal = () => setContactMeIsOpen(false);

  return (
    <div className="w-100 container-fluid d-flex row justify-content-center" style={{display: 'table'}}>
      <div className='section hero-section d-flex flex-column align-items-center justify-content-evenly'>
          <img src={EthGraphic} alt='ethereum' className='w-25 h-50' />
          
          <p className='hero-div-text text-center'>
            Elijah Hampton is fullstack software engineer interested in Web3 and DeFi, a content creator, and UI/UX designer.
          </p>
      </div>
      <ServiceOfferings />

      <div className='portfolio-items d-flex flex-row align-items-center justify-content-between flex-wrap'>
         {
           PORTFOLIO_PHOTOS.map(portfolioItemProps => {
             return <PortfolioItem {...portfolioItemProps} />
           })
         }
      </div>
    </div>
  )
}

export default Home;