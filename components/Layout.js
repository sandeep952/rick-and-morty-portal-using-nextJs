import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Rick And Morty</title>
      </Head>

      <Navbar />
      <div className="container">{props.children}</div>
    </React.Fragment>
  );
};
export default Layout;
