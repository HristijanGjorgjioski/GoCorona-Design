import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
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
`;

const Status = styled.div`
    height: 10px;
    width: 10px;
    background: #9d9d9d;
    border-radius: 1rem;
    margin-left: 0.7rem;

    ${StyledInput}:focus + & {
        background: #ffa689;
    }

    ${StyledInput}:invalid + & {
        background: #fe2f75;
    }

    ${StyledInput}:valid + & {
        background: #70edb9;
    }
`;

export { Container, StyledInput, Status };
