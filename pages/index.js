import Layout from '../components/Layout';
import EpisodeContextProvider from '../context/EpisodeContext';
import EpisodeList from '../components/EpisoideList';
import EpisodeSearchForm from '../components/EpisodeSearchForm';
import Pagination from '../components/Pagination';

export default function Home() {
  return (
    <div className="container">
      <EpisodeContextProvider>
        <Layout>
          <EpisodeSearchForm />
          <EpisodeList />
          <Pagination />
        </Layout>
      </EpisodeContextProvider>
    </div>
  );
}
