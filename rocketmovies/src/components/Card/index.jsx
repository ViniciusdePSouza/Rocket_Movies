import { Container, RatingBox } from './styles'

import EmptyStar from '../../assets/emptystar.svg'
import Star from '../../assets/starfilled.svg'
import { Tag } from '../Tag'

export function Card({ data, ...rest }) {
    return (
        <Container>
            <h1>{data.title}</h1>

            <RatingBox>
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={Star}  alt="" />
               <img src={EmptyStar}  alt="" />
            </RatingBox>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas quos ratione ullam corrupti provident saepe, dolorem enim explicabo asperiores quam temporibus odit dolores, soluta aliquam aperiam eligendi, ipsa totam?</p>

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