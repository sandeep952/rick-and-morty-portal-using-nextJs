import React, { createContext, useReducer, useEffect } from 'react';
import episodeReducer from '../reducer/episodeReducer';
import axios from 'axios';
import {
  fetchEpisodeRequest,
  fetchEpisodeFailure,
  fetchEpisodeSuccess,
  filterEpisodes,
  setDateFilter,
} from '../reducer/episodeActions';
import { FETCH_EPISODE_FAILED } from '../reducer/episodeActionTypes';
const initalState = {
  episodes: [],
  loading: false,
  error: '',
  pages: 0,
  airDateFilter: {
    from: '',
    to: '',
  },
  filteredEpisodes: [],
};
export const EpisodeContext = createContext(initalState);

const EpisodeContextProvider = (props) => {
  const [state, dispatch] = useReducer(episodeReducer, initalState);

  useEffect(() => {
    getAllEpisodes();
  }, []);

  useEffect(() => {
    filter_episodes();
  }, [state.episodes, state.airDateFilter]);

  const getAllEpisodes = () => {
    dispatch(fetchEpisodeRequest());
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then((res) => {
        dispatch(fetchEpisodeSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchEpisodeFailure(error));
      });
  };
  const searchEpisode = (episodeName) => {
    dispatch(fetchEpisodeRequest);
    axios
      .get(`https://rickandmortyapi.com/api/episode?name=${episodeName}`)
      .then((res) => {
        dispatch(fetchEpisodeSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchEpisodeFailure(error.response.data.error));
      });
  };

  const changePage = (pageNumber) => {
    dispatch(fetchEpisodeRequest);
    axios
      .get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)
      .then((response) => {
        dispatch(fetchEpisodeSuccess(response.data));
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        error.response
          ? FETCH_EPISODE_FAILED(error.response.data.error)
          : FETCH_EPISODE_FAILED('Oops...something went wrong');
      });
  };

  const filter_episodes = () => {
    const filterDates = state.airDateFilter;
    const filteredEpisodes = state.episodes.filter((episode) => {
      const episodeDate = Date.parse(episode.air_date);
      return episodeDate >= filterDates.from && episodeDate <= filterDates.to;
    });
    dispatch(filterEpisodes(filteredEpisodes));
  };

  const setFilterDates = (filterDates) => {
    dispatch(setDateFilter(filterDates));
  };

  return (
    <EpisodeContext.Provider
      value={{
        state,
        searchEpisode,
        getAllEpisodes,
        changePage,
        setFilterDates,
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};
export default EpisodeContextProvider;
