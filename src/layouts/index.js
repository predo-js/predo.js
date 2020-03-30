import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import styled from 'styled-components';

const Content = styled.div`
    padding: 5em 15em;
`;

const MainLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Navigation />
        <Content>
            { children }
        </Content>
    </>
);

export default MainLayout;