import React, { useState, useEffect } from 'react';
import './styles.css';

import anime from 'animejs/lib/anime.es.js';

import { Paper } from '@material-ui/core';

import EthereumDiamond from '../../images/ethereum-logo.png';
import { AiFillGithub } from 'react-icons/ai';

const BlockchainSection = () => {
    const [contracts] = useState([
      {
        title: 'Simple ERC-20 Compatible Shared Wallet',
        description: 'This repository contains the code for a shared erc20 compatible Ethereum wallet.',
        link: 'https://github.com/elijahhampton/shared-wallet-erc-20',
      },
      {
        title: 'Asset Tokenization Example',
        description: 'This repository contains the code for a complete example of tokenizing an asset on the Ethereum platform as well as unit testing.',
        link: 'https://github.com/elijahhampton/asset-tokenization',
      },
    ]);

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
    
      const box = document.querySelector('.ml12');
    
      document.addEventListener('scroll', function () {
        if (projectsAnimated == true) {
          if (isInViewport(box)) {
              alert('o')
            animation.play();
            setProjectsAnimated(true)
          }
        }
    
    }, {
        passive: false
    });
    
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml12 .letters2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter2'>$&</span>");
        
        var animation = anime.timeline({loop: false})
          .add({
            targets: '.ml12 .line2',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
          })
          .add({
            targets: '.ml12 .line2',
            translateX: [0, document.querySelector('.ml12 .letters2').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
          }).add({
            targets: '.ml12 .letter2',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          })
          
      }, [])

    return (
        <div className='blockchain-section'>
            <div className='my-5 d-flex flex-column align-items-center justify-content-center'>
           {/* <img src={EthBlocks} style={{width: 280, height: 200}} /> */}
           <h1 class="ml12">
  <span class="text-wrapper2">
    <span class="line2 line2"></span>
    <span  class="letters2">I design and write smart contracts</span>
  </span>
</h1>
            </div>
            
            <div className='my-5 d-flex flex-column flex-md-row align-items-center justify-content-center flex-md-wrap'>
                {
                    contracts.map(({ title, description, link }) => {
                        return (
                            <Paper className='contract m-1 p-4 d-flex flex-column justify-content-between border border-light' elevation={10} style={{backgroundColor: '#eeeeee', width: 350, height: 350}}>
                            <div className='d-flex flex-row align-items-center justify-content-between'>
                                <img src={EthereumDiamond} style={{width: 35, height: 35}} />
        
                                <AiFillGithub size={30} />
                            </div>
        
                             <div className='contract-info text-start'>
                                <h6 style={{color: '#212121'}}>
                                    {title}
                                </h6>
                                <p>
                               {description}
                                </p>
                            </div>
        
        
                            <div className='controls d-flex flex-row align-items-center justify-content-start'>
                                <p onClick={() => window.location.replace('https://github.com/elijahhampton/asset-tokenization')}>
                                    View on Github
                                </p>
                            </div>
                        </Paper>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlockchainSection;