import React from "react";
import Layout from "../components/layout";

const BlogPost = ({pageContext}) => {

    const post = pageContext.pagePath.post;
    console.log(pageContext);
    console.log(post);
    return(
        <Layout>
            <article>
                <h1>{post.title}</h1>
                <div>
                    {post.content}
                </div>
            </article>
        </Layout>
    );    
}

export default BlogPost;
