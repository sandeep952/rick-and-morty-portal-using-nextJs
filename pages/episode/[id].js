import React from "react";
import Layout from "../../components/Layout";
import EpisodeContextProvider from "../../context/EpisodeContext";
import EpisodeDetails from "../../components/EpisodeDetails";
import { useRouter } from "next/router";
const Episode = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout className="title">
      <EpisodeContextProvider>
        {id && <EpisodeDetails id={id} />}
      </EpisodeContextProvider>
    </Layout>
  );
};
export default Episode;
