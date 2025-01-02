import React from "react";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5"; // Import Instagram and GitHub icons
import "./SocialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icon">
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/rald.pra"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <IoLogoInstagram size={30} />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/giraldi07"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <IoLogoGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
