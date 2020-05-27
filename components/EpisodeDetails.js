import React, { useEffect, useContext } from 'react';
import { EpisodeContext } from '../context/EpisodeContext';
import Loading from './Loading';
import Error from './Error/Error';

const EpisodeDetails = ({ id }) => {
  const { fetchEpisodeDetails, state } = useContext(EpisodeContext);
  const { episode, loading, error } = state;
  useEffect(() => {
    fetchEpisodeDetails(id);
  }, []);

  const EpisodeDetailsCard = (episode) => {
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
          {loading && <Loading />}
          {error && <Error errorMessage={error} />}
          {episode && <EpisodeDetailsCard {...episode} />}
        </div>
      </div>
    </section>
  );
};
export default EpisodeDetails;
