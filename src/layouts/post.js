import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5em;
`;

const Title = styled.h1`
    font-size: 48px;
    color: #006898;
    padding: 0;
    margin: 0;
    margin-left: -3px;
`;

const Date = styled.span`
    font-size: 12px;
`;

const Excerpt = styled.p`
    padding: 0;
    font-size: 16px;
`;


const Post = () => (
    <>
        <PostWrapper>
            <Title>Lofi HipHop</Title>
            <Date>Marzec 29, 2020</Date>
            <Excerpt>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</Excerpt>
        </PostWrapper>

        <PostWrapper>
            <Title>Lofi HipHop</Title>
            <Date>Marzec 29, 2020</Date>
            <Excerpt>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</Excerpt>
        </PostWrapper>

        <PostWrapper>
            <Title>Lofi HipHop</Title>
            <Date>Marzec 29, 2020</Date>
            <Excerpt>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</Excerpt>
        </PostWrapper>
    </>
);

export default Post;