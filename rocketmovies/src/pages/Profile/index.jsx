import { Container, Form, Avatar } from './styles'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const [avatar, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdateProfile() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }
        
        await updateProfile({ user })
    }

    function handleUpdateProfile(event){
        const file = event.target.files[0]

        setAvatarFile(file)

        const imgPreview = URL.createObjectURL(file)
        setAvatar(imgPreview)
    }

    return (
        <Container>

            <header>
                <Link to="/">
                    <FiArrowLeft/> Voltar
                </Link>
            </header>

            <Form>
               <Avatar>
                    <img src={avatar} alt="User Photo" />

                    <label htmlFor="">

                        <FiCamera/>

                        <input id="avatar" type="file" onChange={handleUpdateProfile}/>
                    </label>
               </Avatar>

               <Input icon={FiUser} placeholder="Vinícius de Paula" type="text" value={name} onChange={e => setName(e.target.value)}/>
               <Input icon={FiMail} placeholder="vini@email.com" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
               <Input icon={FiLock} placeholder="Current passowrd" type="password" onChange={e => setOldPassword(e.target.value)}/>
               <Input icon={FiLock} placeholder="New passowrd" type="password" onChange={e => setNewPassword(e.target.value)}/>


               <Button type="submit" title="Save Changes" onClick={handleUpdateProfile}/>

            </Form>

        </Container>
    )
}