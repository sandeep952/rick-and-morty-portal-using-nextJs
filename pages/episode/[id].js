import React from 'react';
import Layout from '../../components/Layout';
import EpisodeDetails from '../../components/EpisodeDetails';
import axios from 'axios';
import Error from '../../components/Error/Error';

const Episode = (props) => {
  return (
    <Layout className="title">
      {props.episode ? (
        <EpisodeDetails episode={props.episode} characters={props.characters} />
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
    const characterUrls = res.data.characters;
    const charactersResponse = await axios.all(
      characterUrls.map((url) => axios.get(url))
    );
    const characters = charactersResponse.map((character) => character.data);
    return {
      episode: res.data,
      characters,
    };
  } catch (error) {
    return {
      error: error.response.data.error,
    };
  }
};
