import React from 'react'

import logo from '../../assets/logo.svg'
import Input from './Input/Input'
import { Container, Form, LogoWrapper, Terms } from './sidebar.styles'

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
                <button>Sign Up</button>
            </Form>
            <div>
                <Terms>
                    By signing up, I agree to the Privacy Policy<br />and Terms of Service
                </Terms>
                <h4>Already have an account? <span>Sign In</span></h4>
            </div>
        </Container>
    )
}
    
export default Sidebar;
