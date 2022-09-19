import { Container, BoxContent, Content, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { FiClock, FiArrowLeft } from 'react-icons/fi'

export function Preview() {
    const { user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/${user.avatar}` : avatarPlaceHolder

    return (
        <Container>
            <Header />

            <Content>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>

                <BoxContent>
                    <h1>Interestellar</h1>

                    <RatingBox>
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={EmptyStar} alt="" />
                    </RatingBox>
                </BoxContent>

                <BoxContent>
                    <img src={avatarURL} alt="User Photo" />
                    <span> Vinícius de Paula</span>
                    <FiClock />
                    <span>23/05/22 às 08:00</span>
                </BoxContent>


               <div className='tag-wrapper'>
                    <Tag title="Science Fiction"/>
                    <Tag title="Drama"/>
                    <Tag title="Blow Mind"/>
               </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem, architecto
                    tempora voluptatem nam voluptate voluptas eius ab magnam corporis dolor ad maiores nemo asperiores
                    aliquam minus! Et, quos laborum.

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores illum repellat molestias
                    omnis? Eos tempora accusamus a saepe molestias aliquid et culpa labore! Tenetur dolore deserunt
                    numquam distinctio natus?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores illum repellat molestias
                    omnis? Eos tempora accusamus a saepe molestias aliquid et culpa labore! Tenetur dolore deserunt
                    numquam distinctio natus?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores illum repellat molestias
                    omnis? Eos tempora accusamus a saepe molestias aliquid et culpa labore! Tenetur dolore deserunt
                    numquam distinctio natus?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores illum repellat molestias
                    omnis? Eos tempora accusamus a saepe molestias aliquid et culpa labore! Tenetur dolore deserunt
                    numquam distinctio natus?

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores illum repellat molestias
                    omnis? Eos tempora accusamus a saepe molestias aliquid et culpa labore! Tenetur dolore deserunt
                    numquam distinctio natus?
                    </p>
            </Content>
        </Container>
    )
}