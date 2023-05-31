import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Firstpost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <h1>첫번째 글</h1>
    </Layout>
  );
}
