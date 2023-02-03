import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import ProjectLogo from './Logo';

const Header = () => {
    return (
        <Navbar expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <ProjectLogo />
                </Navbar.Brand>
                <Nav>
                    <Badge pill bg="light"><Nav.Link href="https://www.linkedin.com/in/raghav-sharma-80629a147/" target="_blank"> <Image src='../../social-icon.png' /></Nav.Link> </Badge>
                </Nav>
            </Container>
        </Navbar >
    );
}

export default Header;