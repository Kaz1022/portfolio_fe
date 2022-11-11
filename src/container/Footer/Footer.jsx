import React, { useState } from "react";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: username,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="app__footer" id="contact">
      <h2 className="head-text">Contact</h2>
      <div className="contact__form-container">
        {!isFormSubmitted ? (
          <div className="app__footer-form">
            <div className="app__flex">
              <label className="contact__from-label" htmlFor="username">
                Name
              </label>
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <label className="contact__from-label" htmlFor="email">
                Email
              </label>
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <label className="contact__from-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <div className="button-container">
            <button type="button" className="p-text app__flex" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;
