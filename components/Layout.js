import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Rick And Morty</title>
      </Head>

      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
};
export default Layout;
