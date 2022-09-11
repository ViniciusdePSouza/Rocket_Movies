import { Container, Form, BackgroudImage } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

 import { FiMail, FiLock, FiUser } from 'react-icons/fi'
 
 export function SignUp() {
     
     return(
         <Container>
            <BackgroudImage/>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input icon={FiUser} placeholder="text" type="Insert your name"/>
                <Input icon={FiMail} placeholder="E-mail" type="email"/>
                <Input icon={FiLock} placeholder="Password" type="password"/>

                <Button title='Register' className='log-button'/>
                
                <Link to='/'>Back to Login</Link>
            </Form>

        </Container>
    )
}