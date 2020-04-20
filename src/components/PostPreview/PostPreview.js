import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostWrapper = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5em;
`;

const Title = styled(Link)`
    font-size: 48px;
    font-weight: 700;
    text-decoration: none;
    color: #006898;
    padding: 0;
    margin: 0;
`;

const Date = styled.span`
    font-size: 12px;
`;

const Excerpt = styled.p`
    padding: 0;
    font-size: 16px;
`;


const PostPreview = ({ title, slug, excerpt, date }) => (
    <PostWrapper>
        <Title to={slug}>{title}</Title>
        <Date>{date}</Date>
        <Excerpt>{excerpt}</Excerpt>
    </PostWrapper>
);

export default PostPreview;