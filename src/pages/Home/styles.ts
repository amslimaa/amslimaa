import styled from  'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
`;