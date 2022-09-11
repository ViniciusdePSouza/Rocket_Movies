import { Container, FlexContent, Form, ExcludeButton } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { MovieItem } from '../../components/MovieItem'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <Form>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>

                <h1>New Movie</h1>

                <FlexContent>
                    <Input placeholder="Title" name="title" />
                    <Input placeholder="Rate the movie from 0 to 5 stars" name="rate" />
                </FlexContent>

                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observations: " />

                <h2>Markers</h2>
                
                <div className="tags">
                    <MovieItem value="Science Fiction"/>
                    <MovieItem value="Drama"/>
                    <MovieItem isNew placeholder="Insert a new tag" />
                </div>

                <FlexContent>
                    <ExcludeButton type="submit" name="delete"> Exclude Movie</ExcludeButton>
                    <Button type="submit" title="Save">Save alterations</Button>
                </FlexContent>

            </Form>

        </Container>
    )
}