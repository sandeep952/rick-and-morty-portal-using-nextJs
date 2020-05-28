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

    case actions.FILTER_EPISODES:
      return {
        ...state,
        filteredEpisodes: action.filteredEpisodes,
      };

    case actions.SET_DATE_FILTER:
      return {
        ...state,
        airDateFilter: action.airDateFilter,
      };
    default:
      return state;
  }
};

export default episodeReducer;
