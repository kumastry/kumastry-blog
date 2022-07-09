import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import "./mystyles.scss";
import Header from "../components/header";
import Layout from "../components/layout";

export const query = graphql`
query {
  allMicrocmsBlogs {
    edges {
      node {
        blogsId
        title
      }
    }
  }
}
`

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    
    <Layout>
      <main>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p>
        <p>gga</p> 
        <p>gga</p>
      </main>
    </Layout>
  )
}

export default IndexPage
