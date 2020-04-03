import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SideMenuWrapper = styled.div`
    width: 25%;
    height: 100vh;
    background: crimson;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 2em;
`;

const ListItem = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: #000;
`;

const SideMenu = (props) => (
    <SideMenuWrapper>
        <List>
            <ListItem to='/' onClick={console.log(props)}>Strona główna</ListItem>
            <ListItem to='/about'>O mnie</ListItem>
            <ListItem to='/contact'>Kontakt</ListItem>
        </List>
    </SideMenuWrapper>
);

export default SideMenu;