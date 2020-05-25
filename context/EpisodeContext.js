import React, { createContext, useReducer, useEffect } from "react";
import episodeReducer from "../reducer/episodeReducer";
import axios from 'axios'
import {
  fetchEpisodeRequest,
  fetchEpisodeFailure,
  fetchEpisodeSuccess,
} from "../reducer/episodeActions";
const initalState = {
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
        console.log(res.data);
        dispatch(fetchEpisodeSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchEpisodeFailure(error));
      });
  };

  return (
    <EpisodeContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};
export default EpisodeContextProvider;
