import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { images } from '../../constants';

import "./Header.scss";

const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Konnichiwa", "Hi", "Bonjour" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(()=> {
    let ticker = setInterval(()=> {
      tick();
    }, delta)

    return () => { clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    } 
  }

  const bounceTransision = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut"
    }
  }

  return (
    <section className="app__header app__flex" id="home">
      <div className="header-left">
        <h1><span className="wrap">{text}</span>{`, I'm Kaz!`}</h1>
        <h1>A Mindful Web Developer...</h1>
        <p>...who loves being creative, working with people, trying new things and aquiring new skills. </p>

        {/* blur div */}
        <div className="blur" style={{background: 'var(--white-color)'}}>
        </div>
      </div>

      <div className="header-right app__flex">
          <img src={images.kazyoga} alt="codeyogi" />
          <motion.img 
            transition={bounceTransision}
            animate={{
              y: ["5%", "-5%"]
            }}
            src={images.heart} 
            alt="heart" 
            className="header-heart"
          />
          {/* blur div */}
          <div className="blur" style={{background: 'var(--white-color)'}}>
        </div>          
      </div>

    </section>
  );
};

export default Header;
