import { ProfileContainer, ImgProfile } from './styles'

import ImageProfile from  '../../assets/ams-profile.png'

export function Profile() {
    return (
        <ProfileContainer>
            <ImgProfile src={ImageProfile} />
            <h1>Amós Lima</h1>
            <p>Analista de Dados <a href="www.medimagem.com.br">@Med Imagem · Healthcare</a></p>
        </ProfileContainer>
    )
}