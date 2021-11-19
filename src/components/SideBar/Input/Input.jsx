import React from 'react'

import { Container, Status, StyledInput } from './input.styles';

const Input = ({ placeholder, type }) => {
    return (
        <Container>
           <StyledInput 
            type={type ? type : 'text'} 
            placeholder={placeholder} 
            required 
            autoComplete="off" 
        /> 
            <Status />
        </Container>
    );
};

export default Input
