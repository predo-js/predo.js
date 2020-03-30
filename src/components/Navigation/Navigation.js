import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Navbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 1em 2.5em;
`;

const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Fira Mono';
    font-weight: 400;
    font-size: 2.5em;
`;

const Icon = styled.i`
    font-size: 2em;

    &:hover {
        cursor: pointer;
    }
`;

const Navigation = () => (
    <Navbar>
        <Icon>
            <FontAwesomeIcon icon={faBars} />
        </Icon>
        <Header>Predo.js</Header>
        <Icon>
            <FontAwesomeIcon icon={faLightbulb} />
        </Icon>
    </Navbar>
);

export default Navigation;