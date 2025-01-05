import React, { useState, useEffect } from "react";
import "./Netflix.css"; // Import the CSS file

const Netflix = () => {
  const [netflix, setNetflix] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null); // Track active card

  useEffect(() => {
    fetch("https://movie-scrap-six.vercel.app/api/netflix")
      .then((response) => response.json())
      .then((data) => {
        setNetflix(data.netflix);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching netflix:", error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Toggle active state
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container-fluid">
      {/* Bagian Banner Manual */}
      <div className="container-banner">
        <img
          className="banner-release"
          src="./bg4.jpg" // Pastikan path gambar benar
          alt="Banner release" // Alt text untuk aksesibilitas
          style={{
            width: "100%", // Lebar gambar 100% dari lebar kontainer
            height: "200px", // Tinggi gambar 500px
            objectFit: "cover", // Menggunakan cover untuk menyesuaikan ukuran dan memotong gambar
            objectPosition: "center", // Posisikan gambar di tengah (opsional)
            borderRadius: "10px",
          }}
        />
      </div>
      <h2>NETFLIX</h2>
      <hr className="release-divider"></hr>
      {loading ? (
        <div className="loading">Loading TV Shows...</div>
      ) : (
        <div className="netflix-grid">
          {netflix.map((show, index) => (
            <div
              className="netflix-card"
              key={show.title}
              onClick={() => handleCardClick(index)}
            >
              <img src={show.image_url} alt={show.title} />
              <div
                className={`netflix-info ${
                  activeCard === index ? "active" : ""
                }`}
              >
                <div className="netflix-details">
                  <h3>{show.title}</h3>
                  <p>
                    {show.year} | Rating: {show.rating}
                  </p>
                  <a
                    href={show.link}
                    className="view-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Netflix;
