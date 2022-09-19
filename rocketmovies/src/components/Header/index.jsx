import { Container } from './styles'
import { Input } from '../Input'

import { api } from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function Header(){
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/${user.avatar}` : avatarPlaceHolder

    return(
        <Container to="/profile">
            <h1>RocketMovies</h1>
            
            <Input 
            placeholder = 'Search for a movie'
            type = 'text'
            />

            <div>
                <div>
                    <Link to='/profile'>{ user.name }</Link>
                    <button onClick={ signOut }>Sair</button>
                </div>

                <img src={avatarURL} alt="User Photo" />
            </div>

        </Container>
    )
}