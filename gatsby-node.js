const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const postTemplate = path.resolve("src/layouts/post.js");
    const result = await graphql(`
        query queryCMSPage {
            allDatoCmsArticle {
                nodes {
                    id
                    title
                }
            }
        }
    `);

    result.data.allDatoCmsArticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.title, {lower: true});

        createPage({
            path: `${slugifiedTitle}`,
            component: postTemplate,
            context: {
                id: post.id,
            }
        })
    })
}
