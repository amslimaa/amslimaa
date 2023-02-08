import styled from 'styled-components';

import {Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
    color: ${(props) => props.theme['gray-600']};
    text-decoration: none;
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 10px;
    width: 370px;
    height: 150px;
    align-items: center;
    justify-content: center;

    font-size: 1rem;

    
    &:hover{
        transition: 0.3s;
        color: ${(props) => props.theme['green-300']};
        border: 1px solid ${(props) => props.theme['green-300']};
        cursor: pointer;    
    }
    &:focus {
        outline: none;
    }
    p{
        margin-top: 1rem;
        font-size: 1rem;
    }
`;