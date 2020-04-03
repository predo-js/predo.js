import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu/SideMenu';

const Navbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 1em 2.5em;
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-family: 'Raleway';
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 2.5em;
`;

const Icon = styled.i`
    font-size: 2em;

    &:hover {
        cursor: pointer;
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    openMenu() {
        this.setState({
            isMenuOpen: true,
        })
    }

    closeMenu() {
        this.setState({
            isMenuOpen: false,
        })
    }

    render() {
        const { isMenuOpen } = this.state;

        if(isMenuOpen) {
            return (
                <>
                    <Header />
                    <SideMenu />
                </>
            )
        }
        
        else {
            return (
                <Navbar>
                    <Icon>
                        <FontAwesomeIcon icon={faBars} onClick={this.openMenu.bind(this)}/>
                    </Icon>
                    <Title>Predo.js</Title>
                    <Icon>
                        <FontAwesomeIcon icon={faLightbulb} />
                    </Icon>
                    { isMenuOpen && <SideMenu closeMenuFn={this.closeMenu} /> }
                </Navbar>
            );
        }
    }
}

export default Header;