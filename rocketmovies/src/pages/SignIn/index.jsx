import { Container, Form, BackgroudImage } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

 import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {

    return(
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder="E-mail" type="email"/>
                <Input icon={FiLock} placeholder="Password" type="password"/>

                <Button title='Entrar' className='log-button'/>
                
                <a href="#">Sign Up</a>
            </Form>

            <BackgroudImage/>
        </Container>
    )
}