import * as actions from "./episodeActionTypes";

export const fetchEpisodeSuccess = (data) => {
  return {
    type: actions.FETCH_EPISODE_SUCCESS,
    episodes:data.results,
    pages:data.info.pages
  };
};

export const fetchEpisodeFailure = (errorMessage) => {
  return {
    type: actions.FETCH_EPISODE_FAILED,
    error: errorMessage
  };
};

export const fetchEpisodeRequest = () => {
  return {
    type: actions.FETCH_EPISODE_REQUEST,
  };
};