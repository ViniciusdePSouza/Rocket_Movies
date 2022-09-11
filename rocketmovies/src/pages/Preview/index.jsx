import { Container, BoxContent, Content, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { FiClock, FiArrowLeft } from 'react-icons/fi'

export function Preview() {
    return (
        <Container>
            <Header />

            <Content>
                <a href="#">
                    <FiArrowLeft /> Voltar
                </a>

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
                    <img src="https://github.com/ViniciusdePSouza.png" alt="User Photo" />
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