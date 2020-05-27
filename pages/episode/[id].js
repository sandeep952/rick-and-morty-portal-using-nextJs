import React from 'react';
import Layout from '../../components/Layout';
import EpisodeDetails from '../../components/EpisodeDetails';
import axios from 'axios';
import Error from '../../components/Error/Error';

const Episode = (props) => {
  return (
    <Layout className="title">
      {props.episode ? (
        <EpisodeDetails episode={props.episode} />
      ) : (
        <Error errorMessage={props.error} />
      )}
    </Layout>
  );
};
export default Episode;

Episode.getInitialProps = async (context) => {
  const { id } = context.query;
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    return {
      episode: res.data,
    };
  } catch (error) {
    return {
      error: error.response.data.error,
    };
  }
};
