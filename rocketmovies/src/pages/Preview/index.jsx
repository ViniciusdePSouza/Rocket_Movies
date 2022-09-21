import { Container, BoxContent, Content, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { FiClock, FiArrowLeft } from 'react-icons/fi'

export function Preview() {
    const { user } = useAuth()
    const params = useParams()

    const [data, setData] = useState(null)

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/${user.avatar}` : avatarPlaceHolder

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        fetchNote()
    }, [])

    return (
        <Container>
            {data &&
                <main>

                    <Header />

                    <Content>
                        <Link to="/">
                            <FiArrowLeft /> Voltar
                        </Link>

                        <BoxContent>
                            <h1>{data.title}</h1>

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
                            <span>{user.name}</span>
                            <FiClock />
                            <span>{data.updated_at}</span>
                        </BoxContent>
                        {
                            data.tags &&
                            <div className='tag-wrapper'>
                                {
                                    data.tags.map(tag =>(
                                    <Tag key={tag.id} title={tag.tag_name} />
                                    ))
                                }
                            </div>
                        }
                        <p>{data.description}</p>
                    </Content>
                </main>
            }
        </Container>
    )
}