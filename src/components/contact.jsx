import styled from "styled-components"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w8uaztm', 'template_9lihq9m', form.current, '72A4utSykD-MahTpb')
        .then((result) => {
            console.log(result.text);
            console.log("right")
        }, (error) => {
            console.log("nooooo")
            console.log(error.text);
        });
    };
  

    return <StyledContactForm>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </StyledContactForm>
}

