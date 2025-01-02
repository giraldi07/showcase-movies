import React, { useState, useEffect } from "react";
import "./TVShow.css"; // Pastikan Anda menambahkan file CSS

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://movie-scrap-six.vercel.app/api/tvseries")
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data.tv_series); // Menyimpan data ke state
        setLoading(false); // Menghentikan loading setelah data diterima
      })
      .catch((error) => {
        console.error("Error fetching TV shows:", error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Toggle active state
  };

  // Urutkan TV show berdasarkan tahun terbaru
  const sortedTvShows = [...tvShows].sort((a, b) => b.year - a.year);

  return (
    <div className="container-fluid">
      {/* Bagian Banner Manual */}
      <div className="container-banner">
        <img
          className="banner-release"
          src="./bg2.jpg" // Pastikan path gambar benar
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
      <h2>TV Shows</h2>
      <hr className="release-divider"></hr>
      {loading ? (
        <div className="loading">Loading TV Shows...</div>
      ) : (
        <div className="tvshows-grid">
          {sortedTvShows.map((show, index) => (
            <div
              className="tvshow-card"
              key={show.title}
              onClick={() => handleCardClick(index)}
            >
              <img src={show.image_url} alt={show.title} />
              <div
                className={`tvshow-info ${
                  activeCard === index ? "active" : ""
                }`}
              >
                <div className="tvshow-details">
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

export default TVShows;
