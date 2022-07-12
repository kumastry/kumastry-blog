import React from "react";
import Layout from "../components/layout";
import parse from 'html-react-parser';

const BlogPost = ({pageContext}) => {

    const post = pageContext.pagePath.post;
    console.log(pageContext);
    console.log(post);

 
    return(
        <Layout>
            <article >
                <h1>{post.title}</h1>
                <div id = "detailContent">
                  {parse(post.content)}
                </div>
            </article>
        </Layout>
    );    
}

export default BlogPost;
