import { Container, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'
import { Tag } from '../Tag'
import { useState, useEffect } from 'react'

export function Card({ data, ...rest }) {
    const [stars, setStars] = useState(data.rating)
    const [emptystar, setEmptyStars] = useState(5-data.rating)

    useEffect(() => {
        function renderStars() {
            for (let i = 0; i < stars; i++) {
                return <img src={Star}  alt="" />
            }
            for (let i = 0; i < emptystar; i++) {
                <img src={EmptyStar}  alt="" />
            }
        }
    },[])
    return (
        <Container to="/preview/:id">
            <h1>{data.title}</h1>

            <RatingBox>
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={EmptyStar}  alt="" />
            </RatingBox>

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.tag_name} />)
                    }
                </footer>
            }
        </Container>
    )
}