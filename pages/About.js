import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Designed with Bulma</h1>
            <h2 className="subtitle">Powered by NextJs</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
