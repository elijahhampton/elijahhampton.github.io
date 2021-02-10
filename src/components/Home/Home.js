import React, { useState } from 'react';

import IconAndroid from 'react-devicon/android/plain'
import IconSwift from 'react-devicon/swift/original-wordmark'

import IconCplusplus from 'react-devicon/cplusplus/original'

import IconExpress from 'react-devicon/express/original-wordmark'

import IconNodejs from 'react-devicon/nodejs/original-wordmark'
import IconJquery from 'react-devicon/jquery/original'
import IconJavascript from 'react-devicon/javascript/original'
import IconHtml5 from 'react-devicon/html5/original'
import IconReact from 'react-devicon/react/original'
import IconTypescript from 'react-devicon/typescript/plain'

import PersonalWebsitePicture from '../../images/personal_website.png';
import LupaCheckoutPicture from '../../images/lupa_checkout.png';
import Self from '../../images/face.png';
import LupaAppPicture from '../../images/lupa_mobile.png'
import { AiFillTwitterCircle, AiFillGithub, AiFillGoogleCircle, AiFillCalendar } from "react-icons/ai";
import { MdTrendingUp } from "react-icons/md";
import { useMediaQuery } from 'react-responsive'
import ContactMe from './Modal/ContactMe';
import { useRouter } from '../../hooks/useRouter';

const Home = () => {
  const [contactMeIsOpen, setContactMeIsOpen] = useState(false);
  const router = useRouter();

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

  const handleOnClickGithub = () => {
    window.location.replace("https://github.com/elijahhampton");
  }

  const handleOnClickTwitter = () => {
    window.location.replace('https://twitter.com/elihampton_');
  }

  const handleOnClickGmail = () => {
    handleOnOpenContactModal()
  }

  const handleOnNavigateProjectOne = () => {
    window.location.replace('https://apps.apple.com/us/app/lupa-find-personal-trainers/id1510062386')
  }

  const handleOnNavigateProjectTwo = () => {
    window.location.replace('https://apps.apple.com/us/app/lupa-find-personal-trainers/id1510062386')
  }

  const handleOnNavigateProjectThree = () => {

  }

  const handleOnOpenContactModal = () => setContactMeIsOpen(true);
  const handleOnCloseContactModal = () => setContactMeIsOpen(false);

  return (
    <div class="w-100 container-fluid d-flex row justify-content-center">
      {/* Right Dic */}
      <div id="main-col" class="col-10">
        {/* Hero Div */}

        <div id="about-me" class="d-lg-flex flex-lg-row justify-content-between">
          <div class="col-lg-9">
            <div class="hero-section">

              <h1>
                Elijah Hampton is a software engineer who specializes in mobile, web, and general software development.
              </h1>

              <figure class="text-center">
  <blockquote class="blockquote">
    <p style={{color: 'rgb(124, 177, 179)'}}>Take time to deliberate, but when the time for action has arrived, stop thinking and go.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Napoleon Bonaparte
  </figcaption>
</figure>
            </div>

            <hr class="section-divider" />


            <div class="section sections-spacing">
              <div class="section-header">
                <h3 class="section-header-text">
                  BACKGROUND
                  </h3>
                <div class="section-header-divider" />
              </div>

              <div style={{ width: '100%',  alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontWeight: '300' }}>
                  I am currently 24 years old and I graduated from Auburn University (Auburn, AL) with a bachelors degree in Software Engineering.  At the moment I reside in Melbourne, FL working for Northrop Grumman as a Junior Software Engineer.  I have also spent time in other roles as a software developer for the psychology department at Auburn University and an entry level software engineer at Science Applications and International Corporation.
    </p>

                <p style={{ fontWeight: '300' }}>
                  I have spent most of my time as a professional software engineer using C++ and Python while most of my time outside of a professional setting has been used utilizing Javascript, NodeJS, Java, and Swift.  I have become very familiar with frameworks and technologies such as ReactJS/React Native, JQuery, and Web3 for blockchain development.
    </p>

                <p style={{ fontWeight: '300' }}>
                  My technological interest include general application development with a highlighted interest in blockchain development.  I am also readily available for freelance work for general applications.  Contact me and let's set up a time to talk about your next project.  In my free time I enjoy reading and exploring new blockchain companies in the FinTech space.  Check out some of my threads on decentralized applications and blockchain companies on my Twitter page.
    </p>

              </div>
            </div>
          </div>



          {/* Left Dic */}
          <div class="section-spacing col-lg-2 d-flex flex-column align-items-center">

            {/* Information Section */}
            <div class="d-flex flex-column align-items-center">
              <div style={{ width: 150, height: 150 }} class="rounded">
                <img src={Self} style={{ width: '100%', height: '100%' }} class="rounded-circle shadow" />
              </div>
              <h6 class="p-3 strong" style={{ fontSize: 12, textAlign: 'center' }}>
                Full Stack Software Engineer and Freelancer
      </h6>
              {/* Contact Me Section */}
              <div class="d-flex flex-row align-items-center justify-content-center">
                <AiFillGithub class="social-icon" size={30} color="rgb(197, 204, 215)" onClick={handleOnClickGithub} />
                <AiFillTwitterCircle class="social-icon" size={30} color="rgb(124, 177, 179)" onClick={handleOnClickTwitter} />
                <AiFillGoogleCircle class="social-icon" size={30} color="rgb(197, 204, 215)" onClick={handleOnClickGmail} />
              </div>
            </div>
          </div>

        </div>




        <hr class="section-divider" />





        <section id="latest-work" class="section">
          <div class="section-header">
            <h3 class="section-header-text">
              LATEST WORK
                  </h3>
            <div class="section-header-divider" />
          </div>

          <div class="sections-spacing d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center featured-work-container">
            <div class="col-lg-1" style={{margin: 'auto', width: 180, height: 340 }}>
              <img src={LupaAppPicture} style={{ width: 180, height: 340, padding: 0, margin: 0 }} />
            </div>

            <div class="col-lg-7 d-flex flex-column align-items-lg-end align-items-center featured-work-container-right">
              <h3 style={{ color: '#EEEEEE', fontSize: 18 }}>
                Mobile Application
                      </h3>
              <h3 style={{ color: '#212121' }}>
                Lupa: The Mobile App for Preventative Healthcare
                      </h3>
              <p style={{ fontSize: 12, color: 'rgb(181, 181, 181)' }}>
                Lupa is a free fitness social media application that allows users to start their own freelancing business as a personal trainer or
                find personal trainers instantly.  Users can create large scale create, buy, and sell large scale fitness programs as well as
                participate in in-person or virtual live workout sessions.
                      </p>
                      <button type="button" class="btn btn-primary btn-lg featured-work-btn">View Project</button>

            </div>
          </div>


          <div class="section-spacing d-flex flex-lg-row flex-column-reverse justify-content-lg-evenly justify-content-center align-items-center featured-work-container">
            <div class="col-lg-7 d-flex flex-column align-items-lg-start align-items-center featured-work-container-left">
              <h3 style={{ color: '#EEEEEE', fontSize: 18 }}>
                Website
                      </h3>
              <h3 style={{ color: '#212121' }}>
                Lupa Checkout: A Checkout Page for Fitness Programs on the Lupa Mobile App
                      </h3>
              <p style={{ fontSize: 12, color: 'rgb(181, 181, 181)' }}>
                Lupa Checkout is a mobile first website built to faciliate the payment interface for fitness programs through the Lupa mobile application.
                      </p>
                      <button type="button" class="btn btn-primary btn-lg featured-work-btn">View Project</button>
            </div>

            <div class="col-lg-1" style={{margin: 'auto', width: 180, height: 340 }}>
              <img src={LupaCheckoutPicture} style={{ width: 180, height: 340, margin: 0, padding: 0 }} />
            </div>
          </div>



          <div class="section-spacing d-flex flex-lg-row flex-column justify-content-lg-evenly justify-content-center align-items-center featured-work-container">
            <div class="col-lg-1" style={{margin: 'auto', width: 350, height: 260 }}>
              <img src={PersonalWebsitePicture} style={{ width: 350, height: 260 }} />
            </div>

            <div class="col-lg-7 d-flex flex-column align-items-lg-end align-items-center featured-work-container-right">
              <h3 style={{ color: '#EEEEEE', fontSize: 18 }}>
                Website
                      </h3>
              <h3 style={{ color: '#212121' }}>
                Personal Website / Portfolio
                      </h3>
              <p style={{ fontSize: 12, color: 'rgb(181, 181, 181)' }}>
                My personal website and portfolio that allows visitors to contact me for freelancing services, learn a bit about me, and find direct links through my blockchain content/threads on Twitter.
                      </p>
                      <button type="button" class="btn btn-primary btn-lg featured-work-btn">View Project</button>
            </div>
          </div>
        </section>


      </div>



      <ContactMe isOpen={contactMeIsOpen} closeModal={handleOnCloseContactModal} />
    </div>
  )
}

export default Home;