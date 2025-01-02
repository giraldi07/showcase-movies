import React, { useState } from "react";
import "./NewReleases.css";

const NewReleases = ({ newReleases }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Sort releases by year in descending order
  const sortedReleases = [...newReleases].sort((a, b) => b.year - a.year);

  return (
    <section className="new-releases-section">
      <div className="new-releases-header">
        <h2 className="new-releases-title">New Releases</h2>
      </div>
      <hr className="new-releases-divider"></hr>
      <div className="new-releases-grid">
        {sortedReleases.map((release, index) => (
          <div
            className="new-releases-card"
            key={release.title}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={release.image_url}
              alt={release.title}
              className="release-image"
            />
            {hoveredCard === index && (
              <div className="new-releases-info">
                <div className="new-releases-details">
                  <h3 className="new-releases-name">{release.title}</h3>
                  <p className="new-releases-meta">
                    {release.year} | Rating: {release.rating}
                  </p>
                  <a
                    href={release.link}
                    className="new-releases-view-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
