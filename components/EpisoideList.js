import React, { useContext } from "react";
import EpisodeCard from "./EpisodeCard";
import { EpisodeContext } from "../context/EpisodeContext";


const EpisodeList = () => {
  const { state } = useContext(EpisodeContext);
  const episodes = state.episodes;
  return (
    <section className="block">
      <div className="columns is-multiline">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};
export default EpisodeList;
