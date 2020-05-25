import * as actions from './episodeActionTypes'

export const episodeReducer = (state,action)=>{
    switch(action.type){
        case actions.FETCH_EPISODE_REQUEST:
            return {
                loading:true,
                episodes:[],
                error:'',
                pages:0
            }
        
        case actions.FETCH_EPISODE_SUCCESS:
            return {
                loading:false,
                episodes:action.episodes,
                error:'',
                pages:action.pages
            }
        
        case actions.FETCH_EPISODE_FAILED:
            return {
                loading:false,
                error:action.error,
                episodes:[],
                pages:0
            }
        default:
            return state
    }
}

export default episodeReducer