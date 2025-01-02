// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import "./App.css";
import FeaturedMovies from "./components/FeaturedMovies";
import NewReleases from "./components/NewReleases";
import Navbar from "./components/Navbar"; // Import Navbar
import HeroBanner from "./components/HeroBanner"; // Import HeroBanner
import Footer from "./components/Footer"; // Import Footer
import TVShow from "./pages/TVShow"; // Import TVShow component
import Netflix from "./pages/Netflix";
import ProfilePage from "./pages/ProfilePage";
import MovieByRelease from "./pages/MovieByRelease";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [tvShows, setTvShows] = useState([]); // State for TV shows
  const [loadingTVShows, setLoadingTVShows] = useState(true); // Loading state for TV shows
  const [theme, setTheme] = useState("dark"); // Default theme is dark
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Fetch movie data from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://movie-scrap-six.vercel.app/api/movies"
        );
        const data = await response.json();
        setFeaturedMovies(data.featured_movies);
        setNewReleases(data.film_terbaru);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  // Fetch TV shows data from

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
    // You can implement further logic for filtering movies based on query here
  };

  return (
    <div className={`app ${theme}`}>
      {/* Router Wrapper */}
      <Router>
        {/* Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onSearch={handleSearch} // Pass search handler
        />

        {/* Conditionally render HeroBanner on Home page only */}
        {location.pathname === "/" && <HeroBanner />}

        <main className="mt-32">
          <Routes>
            {/* Route for the Home page */}
            <Route
              path="/"
              element={
                <>
                  {/* Featured Movies */}
                  <FeaturedMovies
                    featuredMovies={featuredMovies}
                    searchQuery={searchQuery}
                  />

                  {/* New Releases */}
                  <NewReleases
                    newReleases={newReleases}
                    searchQuery={searchQuery}
                  />
                </>
              }
            />

            {/* Route for the TV Show page */}
            <Route
              path="/tvshow"
              element={<TVShow tvShows={tvShows} loading={loadingTVShows} />}
            />

            {/* Route for Netflix */}
            <Route path="/netflix" element={<Netflix />} />

            <Route path="/movieByRelease" element={<MovieByRelease />} />

            <Route path="/profilePage" element={<ProfilePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        <Analytics />
      </Router>
    </div>
  );
};

export default App;
