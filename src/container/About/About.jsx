import React from "react";

import "./About.scss";

const About = () => {
  return (
    <section className="app__about app__flex" id="about">
        <h2 className="head-text">ABOUT ME</h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Fun Facts!</h3>
            <div className="about__content-details">
              <span>💡Why I became a developer...</span>
              <p>I decided to join a web development bootcamp after meditating on what I really want to do in my life! I want to keep learning, work remotely and be close to the family!</p><br/>
              <p>Ever since graduating from university, I have worked in a variety of industries, predominately customer service, in Japan, Australia and Canada. I have worked as a student counsellor, an English teacher,an airline customer service agent and a personal trainer and yoga instructor. I’ve always liked trying new things and learning new skills and excel at whatever I put my mind to.<br/>
              </p>
            </div>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {[
                "html",
                "css",
                "javascript",
                "react",
                "sanity",
                "sass",
                "bootstrap",
                "git",
                "responsive design",
                "sql",
                "postgresql",
                "nodejs",
                "ajax",
                "express",
                "jquery",
                "ruby on rails",
                "active record",
                "jest",
                "storybook",
                "cypress",
                "mocha&chai",
              ].map((item) => (
                <div className="skills__skill" key={`skill-${item}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
