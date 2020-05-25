import Layout from "../components/Layout";
import  EpisodeContextProvider  from "../context/EpisodeContext";

export default function Home() {
  return (
    <div className="container">
      <EpisodeContextProvider>
        <Layout>
          <h1 className="title is-2 has-text-centered">Home page</h1>
        </Layout>
      </EpisodeContextProvider>
    </div>
  )
}
