import { Container } from './styles'
import { Input } from '../Input'

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input 
            placeholder = 'Search for a movie'
            type = 'text'
            />

            <div>
                <div>
                    <span>Vinícius</span>
                    <a href="#">Sair</a>
                </div>

                <img src="https://github.com/ViniciusdePSouza.png" alt="User Photo" />
            </div>

        </Container>
    )
}