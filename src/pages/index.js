import React from "react";
import PostPreview from '../components/PostPreview/PostPreview';
import slugify from 'slugify';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { allDatoCmsArticle: { nodes } } = data;

  return (
    <>
      {nodes.slice(0).reverse().map(({title, date, articleContent}) => {
        let excerptContent = articleContent.map(item => item.paragraphContent);
        return (
          <PostPreview
            key={title}
            title={title}
            date={date}
            slug={slugify(title, {lower: true})}
            excerpt={excerptContent != '' || null ? `${excerptContent.toString().slice(0, 140).trim()}...` : <b>There is no content for this article yet!</b>}
          />
        )
      })}
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        date
        articleContent {
          ... on DatoCmsParagraph {
            paragraphContent
          }
        }
      }
    }
  }
`;

export default IndexPage;
