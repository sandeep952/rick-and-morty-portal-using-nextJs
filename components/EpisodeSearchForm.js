import React, { useState, useContext } from 'react';
import { EpisodeContext } from '../context/EpisodeContext';
import Filter from './Filter';

const EpisodeSearchForm = () => {
  const [searchString, setSearch] = useState('');
  const { getAllEpisodes, searchEpisode } = useContext(EpisodeContext);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchEpisode(searchString);
  };

  const getAll = (event) => {
    setSearch('');
    getAllEpisodes();
    event.preventDefault();
  };

  return (
    <form className="section">
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Search episodes"
                autoFocus
                value={searchString}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="column ">
          <div className="buttons">
            <button type="submit" className="button is-info " onClick={handleSubmit}>
              Search
            </button>

            <button className="button is-info" onClick={getAll}>
              All
            </button>
          </div>
        </div>
      </div>
      <Filter />
    </form>
  );
};
export default EpisodeSearchForm;
