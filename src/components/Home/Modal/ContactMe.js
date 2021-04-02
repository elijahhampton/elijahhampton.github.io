import React, { useEffect } from 'react';
import Modal from 'react-modal';

import { initEmailService, sendEmail } from '../../../services/EmailService';

import { MdClose } from "react-icons/md";

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: 'auto',
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 60,
      paddingBottom: 60,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      borderWidth: 1,
      borderColor: '#EEEEEE'
    }
  };

const ContactMe = ({ isOpen, closeModal }) => {
        useEffect(() => {
            initEmailService()
        }, []);

        const handleOnSubmit = () => {
          var inputs, index;

          inputs = document.getElementsByTagName('input');
          for (index = 0; index < inputs.length; ++index) {
              if (inputs[index].value == "") {
                closeModal();
          }

            sendEmail();
            closeModal();
        }
      }

        return (
          <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
               <MdClose color="rgb(124, 177, 179)" size={20} style={{alignSelf: 'flex-start', marginTop: 20, marginBottom: 20}} onClick={closeModal} />
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: 10 }}>
              <h1>
                Let's work together
              </h1>
              <h6>
                Send me an email and let's setup a time to work on your next project.
              </h6>
              </div>
    
     
     <form className="contact-form" onSubmit={handleOnSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
         <div className="input-container">
          <label className="form-title">Name</label>
          <input className="input" type="text" name="from_name" />
         </div>
        
        <div className="input-container">
      
          <label className="form-title">Email</label>
          <input className="input" type="email" name="from_email" />
        </div>
          
          <div className="input-container">
    
          <label className="form-title">Subject</label>
          <input className="input" type="text" name="subject" />
          </div>
          
          <div className="input-container">
          <label className="form-title">Message</label>
          <textarea name="html_message" id="message-container" />
          <input id="send-button" className="input" type="submit" value="Send" />
          </div>
          
        </form>
            </Modal>
        )
}

export default ContactMe;