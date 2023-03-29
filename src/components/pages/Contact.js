// import components from our components folder.
import React, { useState } from 'react';
import '../../styles/Contact.css';

// Contact function - validating email and message - show message  "field is required"
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.trim() === '' || !validateEmail(event.target.value.trim())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || !validateEmail(email.trim()) || message.trim() === '') {
      return;
    }
    // Send the form data to the server here
    setFormSubmitted(true);
  }

  return (
    <div className='containerMain'>
      <div className="contact-container">
        <h1>Contact Me!</h1>
        {formSubmitted ?
          <div className="success-message">
            <p>Thank you for contacting us!</p>
          </div>
          :
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" value={name} onChange={handleNameChange} onBlur={() => setNameError(name.trim() === '')} />
              {nameError && <p className="error-message">This field is required</p>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" value={email} onChange={handleEmailChange} onBlur={() => setEmailError(email.trim() === '' || !validateEmail(email.trim()))} />
              {emailError && <p className="error-message">Please enter a valid email address</p>}
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea value={message} onChange={handleMessageChange}></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        }
      </div>
    </div>
  );
}
// Exporting a component called Contact
export default Contact;
