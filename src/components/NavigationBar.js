import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
  	background-color: #ffffff;
  }

  a, .navbar-brand, .navbar-nav, .navbar-link{
  	color: #000;
  
  	&:hover{
  		color:#219837;
  	}
  }
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg" color='light-blue lighten-4'>
			<Navbar.Brand as={Link} to="/">GC</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav classname="navbar-link">
					<Nav.Item>
	          <Nav.Link as={Link} to="/">
	            <Link to="/">Home</Link>
	          </Nav.Link>
	        </Nav.Item>
	        <Nav.Item>
	          <Nav.Link as={Link} to="/Resume">
	            <Link to="/Resume">Resume</Link>
	          </Nav.Link>
	        </Nav.Item>
	        <Nav.Item>
	          <Nav.Link as={Link} to="/Projects">
	            <Link to="/Projects">Projects</Link>
	          </Nav.Link>
	        </Nav.Item>
	        <Nav.Item>
	          <Nav.Link as={Link} to="/Contact">
	            <Link to="/Contact">Contact</Link>
	          </Nav.Link>
	        </Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
)