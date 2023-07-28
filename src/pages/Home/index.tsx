import { CardsContainer, HomeContainer } from "./styles"

import { Profile} from "../../components/Profile"

import { Card } from "../../components/Card"


export function Home() {
    return (
        <HomeContainer>
            <Profile />
            <CardsContainer>
            <Card 
                title="Github"
                text="Descubra meu universo de código! Acesse agora meu perfil no GitHub e confira meus projetos!"
                link="https://github.com/amslimaa"
            />
            <Card 
                title="Datacamp"
                text="Junte-se a min!"
                link="https://www.datacamp.com/profile/amslimaa"
            />
            <Card 
                title="Instagram"
                text="Quer interagir e entender um pouco do meu dia a dia? Siga-me no instagram!"
                link="https://www.instagram.com/amoslimaa"

            />
            
            <Card 
                title="LinkedIn"
                text="Descubra mais sobre minha experiência profissional. Conecte-se comigo no LinkedIn."
                link="https://www.linkedin.com/in/amslimaa"
            />
           
            </CardsContainer>
        </HomeContainer>
    )
}