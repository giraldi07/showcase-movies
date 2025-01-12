import React from "react";
import "./ProfilePage.css";
import SocialMediaIcons from "../components/SocialMediaIcons";

const ProfilePage = () => {
  return (
    <div className="container-fluid">
      <div className="profile-page">
        <h1 className="profile-title">
          Selamat Datang di Website Movie Showcase!
        </h1>
        <div className="profile-description">
          &ensp;
          <hr></hr>
          <p>
            <strong>Disclaimer:</strong> Perlu diketahui bahwa beberapa fitur
            pada website ini mungkin akan mengarahkan Anda ke sumber pemutaran
            film yang asli. Hal ini karena website ini mengandalkan data yang
            diperoleh melalui scraping. Kami ingin memberitahukan bahwa di situs
            eksternal tersebut mungkin akan terdapat iklan terkait judi online
            dan konten 18+, yang sepenuhnya berada di luar kendali kami. Namun,
            kami menjamin bahwa di website kami, Anda tidak akan menemukan iklan
            seperti itu. Fokus utama kami adalah untuk menjaga kebersihan dan
            kenyamanan pengalaman menonton Anda.
          </p>
          <hr></hr>
        </div>
        {/* <div className="social-media-icon">
          <SocialMediaIcons />
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
