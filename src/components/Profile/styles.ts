import styled from  'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    h1{
        margin: 1rem;
        font-size: 3.5rem;
        line-height: 1;
        text-align: center;
        letter-spacing: -.02em;
        font-weight: bold;
        color:  ${(props) => props.theme.colors.text};
    }
    p{
        text-align: center;
        line-height: 1.5;
        font-size: 1.3rem;
        color:  ${(props) => props.theme.colors.text};
    }
`;
export const ImgProfile = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 2rem
`;