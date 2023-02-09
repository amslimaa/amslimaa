import styled from 'styled-components';

export const ThemeButtom = styled.div`
    
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    &:hover{
        transition: 0.3s;
        color: ${(props) => props.theme.colors['green-300']};
        cursor: pointer;    
    }
`