import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan kamu sudah mengimpor CSS Bootstrap
import "./HeroBanner.css";

const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Menangkap nilai scroll saat ini
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Menambahkan event listener scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Menghapus event listener saat komponen dibersihkan
    };
  }, []);

  return (
    <section className="hero-banner">
      <Carousel interval={3000} indicators={false} controls={false}>
        <div className="content">
          <h2 className="hero-title text-4xl font-bold mb-4">
            Welcome to Movie Showcase
          </h2>
          <p className="copywriting">
            Your ultimate destination for discovering the best movies, TV shows,
            and the latest entertainment news. Dive into a world of action,
            adventure, romance, and drama that will captivate your senses.
          </p>
        </div>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: 'url("./posters.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              transform: `translateY(${scrollY * 0.3}px)`, // Paralaks: gambar bergerak lebih lambat
              transition: "transform 0.1s ease-out", // Transisi untuk mulus
            }}
          >
            <div className="overlay"></div>
            <div className="content"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: 'url("./posters2.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              transform: `translateY(${scrollY * 0.3}px)`, // Paralaks
              transition: "transform 0.1s ease-out", // Transisi
            }}
          >
            <div className="overlay"></div>
            <div className="content"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: 'url("./posters3.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              transform: `translateY(${scrollY * 0.3}px)`, // Paralaks
              transition: "transform 0.1s ease-out", // Transisi
            }}
          >
            <div className="overlay"></div>
            <div className="content"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroBanner;
