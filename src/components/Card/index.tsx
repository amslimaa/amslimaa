
import { BrowserRouter as Router } from 'react-router-dom';
import { CardContainer  } from './styled'

export function Card(props: any) { //adicionar tipos depois
        return (

        <Router>
        <CardContainer to={props.link} target="_blank">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </CardContainer>
        </Router>
        
        )
    
}