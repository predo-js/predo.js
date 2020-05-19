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
    return (
        <div>
            <h1>{data.datoCmsArticle.title}</h1>
            <p>{data.datoCmsArticle.date}</p>
            <div>{data.datoCmsArticle.articleContent.map(item => {
                const itemKey = Object.keys(item)[2];

                switch(itemKey) {
                    case 'paragraphContent':
                        return <p key={item.id}>{item.paragraphContent}</p>;
                    case 'headingContent':
                        return <h2 key={item.id}>{item.headinghContent}</h2>;
                    case 'codeContent':
                        return <pre key={item.id}><code>{item.codeContent}</code></pre>;
                    default:
                        return <p key={item.id}><b>There is no content for this article yet!</b></p>;
                }
                })}
            </div>
        </div>
    )
};

export default PostLayout;