import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled';
import image from '../assets/background1.jpg'; 

const Styles = styled.div`
 .jumbo{
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 background: url(${ image }) repeat fixed bottom;
 background-size: cover;
 color: #fff;
 height: 200px;
 position: relative;
 z-index: -2; 
 display: flex;
 align-items: center;
 }

 .overlay {
 background-color: #000;
 opacity: 0.3;
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
 <div className="jumbo">
 <div className="overlay"></div>
 <Container>
 <h1>Welcome!</h1>
 <p>This is my personal website</p>
 </Container>
 </div>
 </Styles>
)
