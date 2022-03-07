import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
        <a href='https://twitter.com/mestareddy'></a>
      </div>
      <div>
        <FaFacebookF />
        <a href='https://www.facebook.com/Edikanibassey/'></a>
      </div>
      <div>
        <BsInstagram />
        <a href='https://www.instagram.com/mredikan/'></a>
      </div>
      <div>
        <BsGithub />
        <a href='https://github.com/Mestareddy'></a>
      </div>
    </div>
  );
};

export default SocialMedia;
