import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedMovies.css";

const FeaturedMovies = ({ featuredMovies }) => {
  // Ambil 12 film pertama dari array
  const limitedMovies = featuredMovies.slice(0, 12);

  // Pengaturan slider
  const settings = {
    dots: true, // Menampilkan navigasi titik
    infinite: true, // Membuat slider berputar terus
    speed: 1000, // Kecepatan transisi (ms)
    slidesToShow: 4, // Jumlah slide yang tampil (desktop)
    slidesToScroll: 1, // Jumlah slide yang digeser tiap kali
    autoplay: true, // Aktifkan autoplay
    autoplaySpeed: 3000, // Waktu jeda autoplay (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Menampilkan 3 slide di layar dengan lebar <1024px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Menampilkan 2 slide di layar dengan lebar <768px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Menampilkan 1 slide di layar dengan lebar <480px
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <h2 className="text-2xl font-semibold text-gray-900">Featured Movies</h2>
      <hr />

      {/* Slider dengan react-slick */}
      <Slider {...settings}>
        {limitedMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={movie.image_url}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="movie-info">
              <div className="movie-details">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-600">
                  {movie.year} | Rating: {movie.rating}
                </p>
                <a
                  href={movie.link}
                  className="view-button text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedMovies;
