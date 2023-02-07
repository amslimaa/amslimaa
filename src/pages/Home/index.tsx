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
                text="Projeto em que eu compartilho meus conhecimentos"
                link="https://github.com/amslimaa"
            />
            <Card 
                title="Kaggle"
                text="Entenda um pouco sobre meu trabalho com analise de dados"
                link="https://www.kaggle.com/amslima"
            />
            <Card 
                title="Instagram"
                text="Quer interagir e entender um pouco do meu dia a dia?"
                link="https://www.instagram.com/amoslimaa"

            />
            
            <Card 
                title="LinkedIn"
                text="Projeto em que eu compartilho meus conhecimentos"
                link="https://www.linkedin.com/in/amslimaa"
            />
           
            </CardsContainer>
        </HomeContainer>
    )
}