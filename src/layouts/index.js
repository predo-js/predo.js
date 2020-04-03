import React from 'react';
import Header from '../components/Header/Header';
import GlobalStyles from '../assets/styles/globalStyles';
import styled from 'styled-components';

const Content = styled.div`
    padding: 5em 15em;
`;

const MainLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Header />
        <Content>
            { children }
        </Content>
    </>
);

export default MainLayout;