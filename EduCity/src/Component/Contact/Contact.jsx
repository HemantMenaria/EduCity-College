import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/Gmail-Logo.png'
import mail_icon from '../../assets/Gmail-Logo.png'
import phone_icon from '../../assets/Gmail-Logo.png'
import locatiom_icon from '../../assets/Gmail-Logo.png'
import white_arrow from '../../assets/Gmail-Logo.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fb7dc7ca-54b4-4e75-adce-f1350942f327");//  Get your access key from https://web3forms.com/#start
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Hi, This is page created for eduction purpose with the help of HTML, CSS, JS, React.JS in Visual Studio
          if you appriciate my work please support vie UPI, or bank trsansfer so i can do more amezing thing, 
          and if you have any consern with below website you can contact me vie mobile or send me email. Thank you!
        </p>
            <ul>
                <li><img src={mail_icon} alt="" /> hemantmenaria1997@gmail.com.dev</li>
                <li><img src={phone_icon} alt="" /> +91-894-902-7691</li>
                <li><img src={locatiom_icon} alt="" /> 1125 Udaipur, Gurgave <br/> Rajastahn , INDIA</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your number' required />
            <label>Write your message here</label>
            <textarea name="Message" rows="6" placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
