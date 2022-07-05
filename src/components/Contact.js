import React, { useState } from "react";
import {send} from "emailjs-com"
import "./Contact.css";
const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [sender_subject, set_sender_subject] = useState("");
  const [message, setmessage] = useState("");
  function handleName(event) {
    set_sender_name(event.target.value)
  }

  function handleEmail(event) {
    set_sender_email(event.target.value)
  }
  function handleSubject(event) {
    set_sender_subject(event.target.value)
  }
  function handleText(event) {
    setmessage(event.target.value)
  }
  function handleForm(e) {
    e.preventDefault()
    send(
      "service_7mk5o5h",
      "template_juq20je",
      {sender_name,sender_email,sender_subject,message},
      "okW_AJiGUTwCqlXYW"
    )
    .then((res)=>{
      console.log(res.status, res.text);
      
    })
    .catch((err)=>{
      console.log("failed",err);
    })
  }
  return (
    <div className="contact" id="Contact">
      <div className="contact__contents">
        <div className="contact__form">
          <h1>Hire Me.</h1>
          <p>I am available for freelance work. Contact with me via phone:</p>
          <p>
            <span>+243 816 0499 920</span> or email{" "}
            <span>tokunbooye5@gmail.com</span>
          </p>
          <form className="form" onSubmit={handleForm}>
            <input
              name="sender_name"
              type="text"
              placeholder="Your name"
              value={sender_name}
              onChange={handleName}
              required
            />
            <input
              name="sender_email"
              type="email"
              placeholder="Your Email*"
              value={sender_email}
              onChange={handleEmail}
              required
            />
            <input
              name="sender_subject"
              type="text"
              placeholder="Write a Subject"
              value={sender_subject}
              onChange={handleSubject}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your message"
              value={message}
              onChange={handleText}
              required
            ></textarea>
            <button>Submit</button>
            
          </form>
          
        </div>
        <div className="contact__image">
          <img src="/img/contact_Img.png"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
