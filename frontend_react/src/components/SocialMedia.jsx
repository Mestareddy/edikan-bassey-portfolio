import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/mestareddy'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/Edikanibassey/'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/mredikan/'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://github.com/Mestareddy'>
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
