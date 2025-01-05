import React, { useState, useEffect } from "react";
import {
  InputGroup,
  FormControl,
  ListGroup,
  Image,
  Spinner,
  Button,
} from "react-bootstrap";
import { IoSearchCircleOutline, IoCloseCircleOutline } from "react-icons/io5"; // Added close icon
import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [tvShowData, setTvShowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(true); // State to toggle search results visibility

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://movie-scrap-six.vercel.app/api/search"
      );
      const data = await response.json();
      setMovieData(data.movies || []);
      setTvShowData(data.tv_shows || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle search result visibility
  const toggleSearchResults = () => {
    setShowResults(!showResults);
  };

  // Filter movies and TV shows based on search query
  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTVShows = tvShowData.filter((show) =>
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="custom-search-bar-container">
      {/* Search Box */}
      <InputGroup className="custom-search-input-group">
        <FormControl
          type="text"
          placeholder="Search Movies and TV Shows..."
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <InputGroup.Text>
          <IoSearchCircleOutline size={24} />
        </InputGroup.Text>
      </InputGroup>

      {/* Loading Spinner */}
      {loading && (
        <div className="custom-loading-container">
          <Spinner animation="border" />
        </div>
      )}

      {/* Displaying Search Results */}
      {!loading && searchQuery && showResults && (
        <div className="custom-search-results">
          {filteredMovies.length > 0 && (
            <>
              <h3 className="custom-movie-title">Movies:</h3>
              <ListGroup>
                {filteredMovies.map((movie, index) => (
                  <ListGroup.Item key={index} className="custom-search-item">
                    <a
                      href={movie.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={movie.image_url}
                        alt={movie.title}
                        width={100}
                      />
                      <h5 className="custom-item-title">
                        {movie.title} ({movie.year})
                      </h5>
                      <p className="custom-item-rating">
                        Rating: {movie.rating}
                      </p>
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}

          {filteredTVShows.length > 0 && (
            <>
              <h3 className="custom-tv-show-title">TV Shows:</h3>
              <ListGroup>
                {filteredTVShows.map((show, index) => (
                  <ListGroup.Item key={index} className="custom-search-item">
                    <a
                      href={show.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={show.image_url}
                        alt={show.title}
                        width={100}
                      />
                      <h5 className="custom-item-title">{show.title}</h5>
                      <p className="custom-item-rating">
                        Rating: {show.rating}
                      </p>
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}

          <Button
            variant="link"
            className="custom-close-btn"
            onClick={toggleSearchResults} // Close button functionality
          >
            <IoCloseCircleOutline size={24} />
          </Button>
        </div>
      )}

      {/* No results message */}
      {searchQuery &&
        filteredMovies.length === 0 &&
        filteredTVShows.length === 0 &&
        !loading && (
          <div className="custom-no-results">Gada Hasilnya Anjay!!...</div>
        )}
    </div>
  );
};

export default SearchBar;
