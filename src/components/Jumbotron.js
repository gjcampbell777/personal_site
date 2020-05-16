import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import image from '../assets/background1.jpg';

const Styles = styled.div`
	.jumbo{
		background: url(${image}) repeat fixed bottom;
		background-size: cover;
		color: #bbb;
		height: 200px;
		position: relative;
		z-index: -2; 
	}

	.overlay {
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1; 
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1>Welcome!</h1>
				<p>This is my personal website</p>
			</Container>
		</Jumbo>
	</Styles>
)