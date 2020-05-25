import Layout from "../components/Layout";
import EpisodeContextProvider from "../context/EpisodeContext";
import EpisodeList from "../components/EpisoideList";
export default function Home() {
  return (
    <div className="container">
      <EpisodeContextProvider>
        <Layout>
          <EpisodeList/>
        </Layout>
      </EpisodeContextProvider>
    </div>
  );
}
