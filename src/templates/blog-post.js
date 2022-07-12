import React from "react";
import Layout from "../components/layout";
import parse from 'html-react-parser';
import "../pages/mystyles.scss";
import { ImgixGatsbyImage } from '@imgix/gatsby';

const BlogPost = ({pageContext}) => {

    const post = pageContext.pagePath.post;
   // console.log(pageContext);
   // console.log(post);

 
    return(
        <Layout>
            <article >
                <section>
                <h1 className="title" style={{textAlign:'center'}}>{post.title}</h1>

                <div style={{width:'50%', margin:'auto'}}>
                <ImgixGatsbyImage 
                      src= {post.eyecatch.url}
                      layout = "fullWidth"
                      width= {post.eyecatch.width}
                      height = {post.eyecatch.height} 
                      alt = "ブログの画像"
                />
                </div>
                </section>

                <section id = "detailContent">
                    <br/><br/><br/>
                <p>
                  {parse(post.content)}
                </p>
                </section>
            </article>
        </Layout>
    );    
}

export default BlogPost;
