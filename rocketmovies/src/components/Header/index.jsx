import { Container } from './styles'
import { Input } from '../Input'

import { api } from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { useState } from 'react'
import { useEffect } from 'react'

export function Header(){
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/${user.avatar}` : avatarPlaceHolder

    const [title, setTitle] = useState('') 
    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function fetchNotes() {
            await api.get(`/notes?title=${title}`).then(response => setNotes(response.data))
        }
    
        fetchNotes()
    }, [title]) 

    return(
        <Container to="/profile">
            <h1>RocketMovies</h1>
            
            <Input 
            placeholder = 'Search for a movie'
            type = 'text'
            onChange = {e => setTitle(e.target.value)}
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