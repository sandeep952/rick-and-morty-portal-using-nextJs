import React from 'react';

const Character = ({ character }) => {
  return (
    <div className="column is-3-desktop is-6-tablet ">
      <div className="card">
        <div className="card-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card-content">
          <p className="title is-5">{character.name}</p>
          <p className="subtitle is-6">
            {character.status} - {character.species}
          </p>
          <div className="block">
            <p className="has-text-light">Last known location</p>
            <p>{character.location.name}</p>
          </div>
          <div className="block">
            <p className="has-text-light">Origin</p>
            <p>{character.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Character;
