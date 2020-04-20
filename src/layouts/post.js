import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query singleArticle($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            date
            articleContent {
                ... on DatoCmsHeading {
                    id
                    headingContent
                }
                ... on DatoCmsParagraph {
                    id
                    paragraphContent
                }
                ... on DatoCmsCode {
                    id
                    codeContent
                }
            }
        }
    }
`;

const PostLayout = ({ data }) => {
    console.log(data.datoCmsArticle.articleContent.paragraphContent)
    return (
        <div>
            <h1>{data.datoCmsArticle.title}</h1>
            <p>{data.datoCmsArticle.date}</p>
        </div>
    )
};

export default PostLayout;