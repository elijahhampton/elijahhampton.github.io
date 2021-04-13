import React, { useEffect, useState } from 'react';
import './styles.css';

import { Pagination } from '@material-ui/lab';
import anime from 'animejs/lib/anime.es.js';

import PortfolioItem from '../PortfolioItem/PortfolioItem';

import LupaHome from '../../images/LupaHome.png';
import LupaDashboard from '../../images/LupaDashboard.png'
import LupaCheckout from '../../images/LupaCheckout.png'
import MyNFT from '../../images/MyNFT.png'
import VainClothing from '../../images/VainClothingCropped.png'
import EthGraphic from '../../images/EH.png';
import LupaWebsite from '../../images/Lupa.png';

const PORTFOLIO_PHOTOS = [
    {
      title: 'Lupa: A Social Network Fitness Application',
      description: 'React Native, Redux, Typescript, Google Cloud Platform, and Stripe',
      imgSource: [LupaHome, LupaDashboard],
      mockupType: 'phone',
      numItems: 2,
      link: 'https://github.com/elijahhampton/Lupa',
    },
    {
      title: 'Vain Clothing: A Clothing Ecommerce Brand',
      description: 'React, Redux, Google Cloud Platform, and Stripe',
      imgSource: [VainClothing],
      mockupType: 'computer',
      numItems: 1,
      link: 'https://github.com/elijahhampton/vainclothing',
    },
    /*{
      title: 'Lupa Checkout: A Responsive Mobile Checkout Page',
      description: 'React and Google Cloud Platform',
      imgSource: [LupaCheckout],
      mockupType: 'phone',
      numItems: 1,
      link: 'https://github.com/elijahhampton/lupa-web'
    },*/
    {
      title: 'MyNFT: A Blockchain Based Website for Purchasing Influencer NFTs',
      description: 'React, Redux, Ethereum, Web3, and Typescript',
      imgSource: [MyNFT],
      mockupType: 'computer',
      numItems: 1,
      link: 'https://github.com/elijahhampton/my-nft-ui',
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

const PortfolioSection = () => {
    const [projectsAnimated, setProjectsAnimated] = useState(false);
    useEffect(() => {
  
      function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }
  
    const box = document.querySelector('.ml11');
  
    document.addEventListener('scroll', function () {
      if (projectsAnimated == true) {
        if (isInViewport(box)) {
          animation.play();
          setProjectsAnimated(true)
        }
      }
  
  }, {
      passive: false
  });
  
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml11 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
      
      var animation = anime.timeline({loop: false})
        .add({
          targets: '.ml11 .line',
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        }).add({
          targets: '.ml11 .letter',
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i+1)
        })
        
    }, [])

    return (
        <div className='projects d-flex align-items-center flex-column section'>
        <h1 class="ml11">
      <span class="text-wrapper">
        <span class="line line1"></span>
        <span  class="letters">I design and develop code for the end user</span>
      </span>
    </h1>
    
            <div className='portfolio-items d-flex flex-row align-items-start justify-content-between flex-wrap'>
             {
               PORTFOLIO_PHOTOS.map((portfolioItemProps, index, arr) => {
                 if (index >= 2) return;
                 return <PortfolioItem {...portfolioItemProps} />
               })
             }
          </div>
    
          <Pagination className='my-5' count={10} size="small" />
        </div>
    )
}

export default PortfolioSection;