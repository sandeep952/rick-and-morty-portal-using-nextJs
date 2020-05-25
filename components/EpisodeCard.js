import React from "react";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="column is-6-tablet is-4-desktop is-3-widescreen">
      <div className="card">
        <div className="card-content">
          <p className="title">
          {episode.name}
          </p>
        </div>

        <footer className="card-footer">
          <p className="card-footer-item">
            <span>{episode.episode}</span>
          </p>
          <p className="card-footer-item">
            <span>{episode.air_data}</span>
          </p>
        </footer>
      </div>
    </div>
  );
};
export default EpisodeCard;
