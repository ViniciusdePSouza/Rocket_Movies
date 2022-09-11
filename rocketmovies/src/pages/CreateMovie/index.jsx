import { Container, FlexContent, Form, ExcludeButton } from './styles'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <Form>
                <a href="#">
                    <FiArrowLeft /> Voltar
                </a>

                <h1>New Movie</h1>

                <FlexContent>
                    <Input placeholder="Title" name="title"/> 
                    <Input placeholder="Rate the movie from 0 to 5 stars" name="rate"/> 
                </FlexContent>

                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observations: "/>

                <h2>Markers</h2>

                <FlexContent>
                    <ExcludeButton type="submit" name="delete"> Exclude Movie</ExcludeButton>
                    <Button type="submit" title="Save">Save alterations</Button>
                </FlexContent>

            </Form>
        </Container>
    )
}