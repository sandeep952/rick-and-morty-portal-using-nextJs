import React, { createContext,useReducer } from "react";
import episodeReducer from '../reducer/episodeReducer'
const initalState = {
  episodes: [],
  loading: false,
  error: "",
  pages: 0,
};
export const EpisodeContext = createContext(initalState);

const EpisodeContextProvider = (props) => {
  const [state, dispatch] = useReducer(episodeReducer, initalState);

  return (
    <EpisodeContext.Provider value={{ 
        state
     }}>
      {props.children}
    </EpisodeContext.Provider>
  );
};
export default EpisodeContextProvider;