import React from 'react';

const EpisodeDetails = ({ episode }) => {
  const EpisodeDetailsCard = () => {
    return (
      <div className="card has-text-centered">
        <div className="title">{episode.name}</div>

        <div className="card-content">
          <div className="columns">
            <div className="column">
              <span className="tag is-black ">Air date</span>
            </div>
            <div className="column">
              <span>{episode.air_date}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <span className="tag is-black ">Episode</span>
            </div>
            <div className="column">
              <span>{episode.episode}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <EpisodeDetailsCard />
        </div>
      </div>
    </section>
  );
};
export default EpisodeDetails;
