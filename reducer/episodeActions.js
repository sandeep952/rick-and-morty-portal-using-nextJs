import * as actions from './episodeActionTypes'

export const fetchEpisodeSuccess = (episodes) => {
    return { 
        type: actions.FETCH_EPISODE_SUCCESS, 
        episodes 
      }
  }
  
  export const fetchEpisodeFailure = (errorMessage)=>{
      return {
          type:actions.fetchEpisodeFailure,
          error:errorMessage
      }
  }
  
  
  export const fetchEpisodeRequest = ()=>{
      return {
          type:actions.FETCH_EPISODE_REQUEST
      }
  }
  
  
  