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
]

const Home = () => {
  const [contactMeIsOpen, setContactMeIsOpen] = useState(false);

  const handleOnOpenContactModal = () => setContactMeIsOpen(true);
  const handleOnCloseContactModal = () => setContactMeIsOpen(false);

  return (
    <div className="w-100 container-fluid d-flex row justify-content-center" style={{display: 'table'}}>
      <div className='section hero-section d-flex flex-column align-items-center justify-content-center position-relative'>
          <p className='hero-div-text'>
            Elijah Hampton is a <span style={{color: 'royalblue'}}>Fullstack Software Engineer</span> interested in <span style={{color: 'royalblue'}}>Web3</span> and <span style={{color: 'royalblue'}}>DeFi</span>.  Also he specializes in mobile, web, and general software development.
          </p>
          <p className='bio'>
          I am currently 24 years old and I graduated from Auburn University (Auburn, AL) with a bachelors degree in Software Engineering. At the moment I reside in Melbourne, FL working for Northrop Grumman as a Junior Software Engineer. I have also spent time in other roles as a software developer for the psychology department at Auburn University and an entry level software engineer at Science Applications and International Corporation.

I have spent most of my time as a professional software engineer using C++ and Python while most of my time outside of a professional setting has been used utilizing Javascript, NodeJS, React, Web3, and TypeScript.

My technological interest include general application development with a highlighted interest in Web3 and DeFi. I am also readily available for freelance work for general applications. Contact me and let's set up a time to talk about your next project.
          </p>
      </div>

      <div className='portfolio-items d-flex flex-row align-items-center justify-content-between flex-wrap'>
         {
           PORTFOLIO_PHOTOS.map(portfolioItemProps => {
             return <PortfolioItem {...portfolioItemProps} />
           })
         }
      </div>
      
      <ContactMe isOpen={contactMeIsOpen} closeModal={handleOnCloseContactModal} />
    </div>
  )
}

export default Home;