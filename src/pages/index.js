import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage ,GatsbyImage} from 'gatsby-plugin-image'
import "./mystyles.scss";
import Header from "../components/header";
import Layout from "../components/layout";
import { ImgixGatsbyImage } from '@imgix/gatsby';

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
        <ul style={{display : 'flex', flexWrap : "wrap", }}>
          {blogs.map((blog) => {
            /*return(
              <p>{blog.node.title}</p>
            );*/



        
            console.log("###")
            console.log(blog.node.eyecatch.url);
            console.log("###")
            return(

             
        
             

              <article style={{margin: "1rem",  flex: '1'}}>
              
              <li>
                <div className="card is-flex-wrap-wrap">

                  <div class="card-image">
                      <ImgixGatsbyImage 
                      src= {blog.node.eyecatch.url}
                      layout = "fullWidth"
                      width= {blog.node.eyecatch.width}
                      height = {blog.node.eyecatch.height} 
                      alt = "ブログの画像"
                      />
                  </div>


                  <div className="card-content">
                    {blog.node.title}
                  </div>

                </div>
          
              </li>
              </article>

             
            );
          })}
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
