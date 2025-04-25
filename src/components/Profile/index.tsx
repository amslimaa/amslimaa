import { ProfileContainer, ImgProfile } from './styles'

import ImageProfile from  '../../assets/ams-profile.png'

export function Profile() {
    return (
        <ProfileContainer>
            <ImgProfile src={ImageProfile} />
            <h1>Amós Magalhães</h1>
            <p>Data Engineer <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">@DB Server · Design & Build</a></p>
        </ProfileContainer>
    )
}