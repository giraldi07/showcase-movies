import React, { useEffect, useState } from "react";
import "./MovieByRelease.css";

const MovieByRelease = () => {
  const [moviesData, setMoviesData] = useState({
    movies: [],
    tvShows: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://release-year.vercel.app/api/release?year=${selectedYear}`
        );
        const data = await response.json();
        if (response.ok) {
          setMoviesData({
            movies: data.movies || [],
            tvShows: data.tvShows || [],
          });
        } else {
          setError(data.error || "An error occurred");
        }
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear]);

  const years = Array.from({ length: 45 }, (_, i) => 2024 - i);

  return (
    <div className="container-fluid movie-release-container">
      {/* Bagian Banner Manual */}
      <div className="container-banner">
        <img
          className="banner-release"
          src="./bg3.jpg"
          alt="Banner release"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
          }}
        />
      </div>

      <h1>Movies and TV Shows by Release Year</h1>

      {/* Tahun sebagai kartu */}
      <div className="year-cards-container">
        {years.map((year) => (
          <div
            key={year}
            className={`year-card ${
              selectedYear === year.toString() ? "active" : ""
            }`}
            onClick={() => setSelectedYear(year.toString())}
          >
            {year}
          </div>
        ))}
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="movies-tv-container">
          <section>
            <h2>Movies</h2>
            <hr className="release-divider"></hr>
            {moviesData.movies && moviesData.movies.length > 0 ? (
              <ul className="movies-list">
                {moviesData.movies.map((movie, index) => (
                  <li key={index} className="movie-item">
                    <img
                      src={movie.image_url}
                      alt={movie.title}
                      className="movie-image"
                    />
                    <h3 className="judul-card">{movie.title}</h3>
                    <p className="desc-card">Year: {movie.year}</p>
                    <p className="desc-card">Rating: {movie.rating}</p>
                    <a
                      href={movie.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="more-info-link"
                    >
                      More Info
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No movies found.</p>
            )}
          </section>

          <section>
            <h2>TV Shows</h2>
            <hr className="release-divider"></hr>
            {moviesData.tvShows && moviesData.tvShows.length > 0 ? (
              <ul className="tvshows-list">
                {moviesData.tvShows.map((tvShow, index) => (
                  <li key={index} className="tvshow-item">
                    <img
                      src={tvShow.image_url}
                      alt={tvShow.title}
                      className="tvshow-image"
                    />
                    <h3 className="judul-card">{tvShow.title}</h3>
                    <p className="desc-card">Year: {tvShow.year}</p>
                    <p className="desc-card">Rating: {tvShow.rating}</p>
                    <a
                      href={tvShow.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="more-info-link"
                    >
                      More Info
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No TV shows found.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieByRelease;
