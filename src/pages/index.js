import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage ,GatsbyImage} from 'gatsby-plugin-image'
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
        content
        author
        eyecatch {
          height
          url
          width
        }
      }
    }
  }
}
`

const IndexPage = () => {
  const blogs = useStaticQuery(query).allMicrocmsBlogs.edges;
  console.log(blogs);
  return (
    
    <Layout>
      <main>
        <ul>
          {blogs.map((blog) => {
            /*return(
              <p>{blog.node.title}</p>
            );*/

            console.log("###")
            console.log(blog.node.eyecatch.url);
            console.log("###")
            return(
              <div className="block">
              <li>
                <div className="card" style={{margin: "3rem 5rem"}}>

                  <div class="card-image">
                      <GatsbyImage img = {blog.node.eyecatch.url} alt = "noa"/>
                  </div>


                  <div className="card-content">
                    {blog.node.title}
                  </div>

                </div>
          
              </li>
              </div>
            );
          })}
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
