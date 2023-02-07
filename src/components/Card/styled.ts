import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 10px;
    width: 350px;
    height: 150px;
    align-items: center;
    justify-content: center;
    &:hover{
        color: ${(props) => props.theme['yellow-500']};
        border: 1px solid ${(props) => props.theme['yellow-500']};
        cursor: pointer;
    }
`;