import { Container, Form, BackgroudImage } from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder="E-mail" type="email" onChange={event => setEmail(event.target.value)}/>
                <Input icon={FiLock} placeholder="Password" type="password" onChange={event => setPassword(event.target.value)}/>

                <Button title='Entrar' className='log-button' onClick={handleSignIn}/>
                
                <Link to="/register">Sign Up</Link>
            </Form>

            <BackgroudImage/>
        </Container>
    )
}