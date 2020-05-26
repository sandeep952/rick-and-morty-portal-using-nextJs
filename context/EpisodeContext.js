import React, { createContext, useReducer, useEffect } from "react";
import episodeReducer from "../reducer/episodeReducer";
import axios from "axios";
import {
  fetchEpisodeRequest,
  fetchEpisodeFailure,
  fetchEpisodeSuccess,
  fetchEpisodeDetailsRequest,
  fetchEpisodeDetailsFailure,
  fetchEpisodeDetailsSuccess,
} from "../reducer/episodeActions";
import { FETCH_EPISODE_FAILED } from "../reducer/episodeActionTypes";
const initalState = {
  episode: null,
  episodes: [],
  loading: false,
  error: "",
  pages: 0,
};
export const EpisodeContext = createContext(initalState);

const EpisodeContextProvider = (props) => {
  const [state, dispatch] = useReducer(episodeReducer, initalState);

  useEffect(() => {
    getAllEpisodes();
  }, []);

  const getAllEpisodes = () => {
    dispatch(fetchEpisodeRequest());
    axios
      .get("https://rickandmortyapi.com/api/episode")
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
          : FETCH_EPISODE_FAILED("Oops...something went wrong");
      });
  };

  const fetchEpisodeDetails = (id) => {
    dispatch(fetchEpisodeDetailsRequest());
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => {
        dispatch(fetchEpisodeDetailsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchEpisodeDetailsFailure(error.response.data.error));
      });
  };
  return (
    <EpisodeContext.Provider
      value={{
        state,
        searchEpisode,
        getAllEpisodes,
        changePage,
        fetchEpisodeDetails,
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};
export default EpisodeContextProvider;
