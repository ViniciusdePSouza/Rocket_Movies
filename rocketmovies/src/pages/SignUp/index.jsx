import { useState }  from 'react'
import { api } from '../../services/api'

import { Container, Form, BackgroudImage } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'

 import { FiMail, FiLock, FiUser } from 'react-icons/fi'
 
 export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSigUp(){
        if(!name || !email || !password){
            return alert('Please fill all of the fields')
        }

        api.post('/users', { name, email, password})
        .then(() => {
            alert('User successfully registered')
            navigate('/')
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert('Not possible to register')
            }
        })
    }

     
     return(
         <Container>
            <BackgroudImage/>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input icon={FiUser} placeholder="Name" type="Insert your name" onChange = {event => setName(event.target.value)}/>
                <Input icon={FiMail} placeholder="E-mail" type="email" onChange = {event => setEmail(event.target.value)}/>
                <Input icon={FiLock} placeholder="Password" type="password" onChange = {event => setPassword(event.target.value)}/>

                <Button title='Register' className='log-button' onClick={handleSigUp}/>
                
                <Link to='/'>Back to Login</Link>
            </Form>

        </Container>
    )
}