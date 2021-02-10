import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const SERVICE_KEY = "service_dob0n66"
const USER_ID = "user_mSYVr0PyVW2VqW4oW20MY"
const TEMPLATE_ID = "template_1ha5ts4"

export function initEmailService() {
    init(USER_ID);
}

export function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm(SERVICE_KEY, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

