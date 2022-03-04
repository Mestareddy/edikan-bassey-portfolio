import { React, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { init } from "ityped";
import "./Header.scss";
import { images } from "../../constants";

import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React Web Developer",
        "UI/UX Designer",
        "IT Specialist",
        "Content Manager",
      ],
    });
  }, []);
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Edikan</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>
              I'm A Freelance <span ref={textRef}></span>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile_me} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[
          images.sass,
          images.javascript,
          images.react,
          images.node,
          images.python,
        ].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
