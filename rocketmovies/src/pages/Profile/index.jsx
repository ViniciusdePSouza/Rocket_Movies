import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function Profile(){
    return (
        <Container>

            <header>
                <Link to="/">
                    <FiArrowLeft/> Voltar
                </Link>
            </header>

            <Form>
               <Avatar>
                    <img src="https://github.com/ViniciusdePSouza.png" alt="User Photo" />

                    <label htmlFor="">

                        <FiCamera/>

                        <input id="avatar" type="file" />
                    </label>
               </Avatar>

               <Input icon={FiUser} placeholder="Vinícius de Paula" disabled type="text"/>
               <Input icon={FiMail} placeholder="vini@email.com" type="email"/>
               <Input icon={FiLock} placeholder="Current passowrd" type="password"/>
               <Input icon={FiLock} placeholder="New passowrd" type="password"/>


               <Button type="submit" title="Save Changes"/>

            </Form>

        </Container>
    )
}