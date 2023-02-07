
import { CardContainer } from './styled'

export function Card(props: any) { //adicionar tipos depois
        return (
        
        <CardContainer>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </CardContainer>)
    
}