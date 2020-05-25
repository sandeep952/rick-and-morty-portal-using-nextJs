import React from "react";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="column is-6-tablet is-4-desktop is-3-widescreen">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title has-text-centered">{episode.name}</p>
        </div>
        <div className="card-content">
          <div className="columns has-text-centered">
            <div className="column ">{episode.episode}</div>
            <div className="column">{episode.air_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EpisodeCard;
