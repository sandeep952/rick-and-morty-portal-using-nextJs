import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};
export default Layout;
