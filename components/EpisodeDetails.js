import React from 'react';
import Character from './Character';

const EpisodeDetails = ({ episode, characters }) => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <div className="title is-1">{episode.name}</div>
        <hr />
        <div className="columns">
          <div className="column">
            <p className="subtitle tag is-black is-4">Air date</p>
            <p className="is-size-5">{episode.air_date}</p>
          </div>
          <div className="column">
            <p className="subtitle tag is-black is-4">Episode</p>
            <p className="is-size-5">{episode.episode}</p>
          </div>
        </div>

        <p className="title is-2">Characters</p>
        <div className="columns is-multiline">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default EpisodeDetails;
