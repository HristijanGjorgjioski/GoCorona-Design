import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <Container>
            <h1>Sidebar</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    background-color: rgb(255, 255, 255, 0.2);

    @media (max-width: 650px) {
        
    }
`;
    
export default Sidebar
