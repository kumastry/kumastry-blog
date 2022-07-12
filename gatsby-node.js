const path = require("path");
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMicrocmsBlogs {
            edges {
              node {
                author
                blogsId
                createdAt
                content
                id
                eyecatch {
                  height
                  url
                  width
                }
                title
                sortIndex
                updatedAt
              }
            }
          }       
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  };

  

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  result.data.allMicrocmsBlogs.edges.forEach( node  => {
    createPage({
      path: `/blog/${node.node.blogsId}`,
      component:blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath:{post:node.node}
      },
    })
  })
}