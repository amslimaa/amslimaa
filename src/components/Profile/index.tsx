import { ProfileContainer, ImgProfile } from './styles'

import ImageProfile from  '../../assets/ams-profile.png'



export function Profile() {
    return (
        <ProfileContainer>
            <ImgProfile src={ImageProfile} />
            <h1>Amós Lima</h1>
            <p>Cientista de dados apaixonado por desenvolvimento de software!</p>
        </ProfileContainer>
    )
}