import styled from 'styled-components';

import {Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors['gray-300']};
    border-radius: 10px;
    width: 370px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-align: left;
    letter-spacing: -.01em;
    font-size: 1rem;
    &:hover{
        transition: 0.3s;
        color: ${(props) => props.theme.colors['green-300']};
        border: 1px solid ${(props) => props.theme.colors['green-300']};
        cursor: pointer;    
    }
    &:focus {
        outline: none;
    }
    p{
        margin-top: 1rem;
        font-size: 1rem;
    }
    @media(max-width:800px) {
    width: 90vw;
    }
`;