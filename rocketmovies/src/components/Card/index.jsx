import { Container, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'
import { Tag } from '../Tag'

export function Card({ data, ...rest }) {
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
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}