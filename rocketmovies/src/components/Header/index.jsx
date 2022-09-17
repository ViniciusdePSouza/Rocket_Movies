import { Container } from './styles'
import { Input } from '../Input'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function Header(){
    const { signOut } = useAuth()

    return(
        <Container to="/profile">
            <h1>RocketMovies</h1>
            
            <Input 
            placeholder = 'Search for a movie'
            type = 'text'
            />

            <div>
                <div>
                    <Link to='/profile'>Vinícius</Link>
                    <button onClick={ signOut }>Sair</button>
                </div>

                <img src="https://github.com/ViniciusdePSouza.png" alt="User Photo" />
            </div>

        </Container>
    )
}