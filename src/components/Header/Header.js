import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 1em 2.5em;
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-family: 'Raleway';
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 2.5em;
    text-align: center;
`;

const Icon = styled.i`
    font-size: 2em;
    margin: 0 7px;

    &:hover {
        cursor: pointer;
    }
`;

const SocialIconsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-self: flex-end;

    &:hover {
        cursor: pointer;
    }
`;

const Header = () => (
    <Navbar>
        <Icon>
            <FontAwesomeIcon icon={faLightbulb} />
        </Icon>
        <Title>Predo.js</Title>
        <SocialIconsWrapper>
            <Icon>
                <FontAwesomeIcon icon={faTwitter} onClick={(e) => {e.preventDefault(); window.open("https://twitter.com/predo_js", "_blank");}}/>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faGithub} onClick={(e) => {e.preventDefault(); window.open("https://github.com/predo-js", "_blank")}}/>
            </Icon>
        </SocialIconsWrapper>
    </Navbar>
);


export default Header;