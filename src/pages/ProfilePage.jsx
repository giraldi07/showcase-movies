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
          <p>
            Selamat datang di Website Movie Showcase, tempat terbaik untuk
            menonton film secara gratis dan tanpa gangguan. Kami menyediakan
            berbagai pilihan film berkualitas yang dapat Anda nikmati kapan
            saja, tanpa perlu khawatir tentang biaya atau langganan.
          </p>
          <p>
            Website ini 100% gratis dan tidak memungut biaya apapun. Kami
            berkomitmen untuk memberikan pengalaman menonton yang nyaman dan
            menyenangkan tanpa adanya iklan yang mengganggu. Tidak ada biaya
            tersembunyi, tidak ada langganan, dan yang paling penting, tidak ada
            iklan 18+ atau materi terkait perjudian/judi online pada semua
            halaman website ini.
          </p>
          <p>
            Kami ingin Anda menikmati film favorit Anda tanpa gangguan apapun.
            Oleh karena itu, kami menjamin bahwa kami tidak bekerja sama dengan
            pihak manapun yang berhubungan dengan iklan judi online atau iklan
            18+. Apabila Anda pernah melihat iklan yang tidak sesuai dengan
            kebijakan kami, kami ingin menegaskan bahwa kami tidak tahu menahu
            mengenai hal tersebut dan kami akan segera mengambil langkah untuk
            mengatasinya.
          </p>
          <p>
            Dengan tampilan yang bersih dan bebas dari iklan yang mengganggu,
            kami memastikan bahwa pengalaman menonton Anda tetap nyaman. Fokus
            kami adalah untuk menyediakan hiburan yang sehat dan berkualitas
            bagi semua kalangan, tanpa mempedulikan umur atau latar belakang
            Anda.
          </p>
          <p>
            Nikmati berbagai film dari berbagai genre dengan kualitas terbaik.
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
            atau ingin memberikan masukan mengenai pengalaman menonton Anda.
          </p>
          <p>
            Terima kasih telah memilih Website Movie Showcase sebagai sumber
            hiburan Anda. Kami akan terus berusaha untuk memberikan layanan
            terbaik bagi Anda!
          </p>
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
        <div className="social-media-icon">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
