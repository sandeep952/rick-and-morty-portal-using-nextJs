import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = (props)=> {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"
        />
      </Head>
      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
}
export default Layout;