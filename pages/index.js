import Layout from "../components/Layout";
import EpisodeContextProvider from "../context/EpisodeContext";
import EpisodeList from "../components/EpisoideList";
import EpisodeSearchForm from "../components/EpisodeSearchForm";


export default function Home() {
  
  return (
    <div className="container">
      <EpisodeContextProvider>
        <Layout>
          <EpisodeSearchForm />
          <EpisodeList />
        </Layout>
      </EpisodeContextProvider>
    </div>
  );
}
