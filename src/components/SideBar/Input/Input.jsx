import React from 'react'
import styled from 'styled-components'

const Input = ({ placeholder, type }) => {
    return (
        <Container>
           <input type={type} placeholder={placeholder} /> 
            <div />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    input {
        max-width: 350px;
        min-width: 250px;
        padding: 0 1rem;
        margin: 0.5rem 0;
        height: 40px;
        border: none;
        background-color: #f5f5f5;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.3);
        border-radius: 1rem;

        transition: all 0.2s ease-in;
        &:hover {
            transform: translate(-5px);
        }
    }
`

export default Input
