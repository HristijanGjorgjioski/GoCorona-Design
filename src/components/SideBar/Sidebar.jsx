import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/logo.svg'
import Input from './Input/Input'

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="logo" />
                <h3>Gjorgjioski <span>Team</span></h3>
            </LogoWrapper>
            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="Full Name" type="text" />
                <Input placeholder="E-mail" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
            </Form>
        </Container>
    )
}

const Form = styled.form`
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    img {
        height: 6rem;
    }

    h3 {
        text-align: center;
        color: #FF8D8D;
        font-weight: 600;
        font-size: 22px;
    }

    span {
        color: #5dc399;
        font-weight: 400;
        font-size: 18px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2rem;
    backdrop-filter: blur(15px);
    background-color: rgb(255, 255, 255, 0.6);
`;
    
export default Sidebar
