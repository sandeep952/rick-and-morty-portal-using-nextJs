import * as actions from './episodeActionTypes';

export const episodeReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_EPISODE_REQUEST:
      return {
        ...state,
        loading: true,
        episodes: [],
        error: '',
        pages: 0,
      };

    case actions.FETCH_EPISODE_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.episodes,
        error: '',
        pages: action.pages,
      };

    case actions.FETCH_EPISODE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        episodes: [],
        pages: 0,
      };
    case actions.FETCH_EPISODE_DETAILS_REQUEST:
      return {
        ...state,
        episode: null,
        loading: true,
        error: '',
      };
    case actions.FETCH_EPISODE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        episode: action.episode,
      };

    case actions.FETCH_EPISODE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        episode: null,
      };

    default:
      return state;
  }
};

export default episodeReducer;
