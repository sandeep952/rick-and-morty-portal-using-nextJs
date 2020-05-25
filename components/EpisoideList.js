import React, { useContext } from "react";
import EpisodeCard from "./EpisodeCard";
import { EpisodeContext } from "../context/EpisodeContext";
import Loading from "../components/Loading";
import Error from "../components/Error/Error";
const EpisodeList = () => {
  const { state } = useContext(EpisodeContext);
  const { episodes, loading, error } = state;
  return (
    <section className="block">
      {loading && <Loading />}
      {error && <Error errorMessage={error} />}
      <div className="columns is-multiline">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};
export default EpisodeList;
