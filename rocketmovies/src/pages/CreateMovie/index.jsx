import { Container, FlexContent, Form, ExcludeButton } from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { MovieItem } from '../../components/MovieItem'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api'

export function CreateMovie() {
    const navigate = useNavigate()

    const [tagsArray, setTagsArray] = useState([])
    const [newTag, setNewTag] = useState('')
    
    const [movieRate, setMovieRate] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleAddTag(){
        setTagsArray(prevState => [...prevState, newTag]) 
        setNewTag('')
    }

    function deleteTag(deletedTag){
        setTagsArray(prevState => prevState.filter( tag => tag !== deletedTag))
    }

    async function handleCreateNote() {
        if (!title){
            return alert('Every note must have a title, please fill in the title fields')
        }

        if(!description){
            return alert('Please tell us about the movie in the description field')
        }

        if(!movieRate) {
            return alert('Please fill the movie rate field so the whole community can know what to expect from the movie')
        }

        if(newTag){
            return alert("There's a movie tag with a unfinished action, please give a double check on that in order to complete the note addition")
        }

        await api.post('/notes', {
            title,
            description,
            rating: movieRate,
            tags: tagsArray
        })

        alert('Note created successfully')
        navigate('/')
    }

    function handleClearFields(){
        setTagsArray('')
        setTitle('')
        setDescription('')
        setMovieRate('')
        setNewTag('')
    }

    return (
        <Container>
            <Header />

            <Form>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>

                <h1>New Movie</h1>

                <FlexContent>
                    <Input placeholder="Title" name="title" onChange={e => setTitle(e.target.value)}/>
                    <Input placeholder="Rate the movie from 0 to 5 stars" name="rate" onChange={e => Number(setMovieRate(e.target.value))}/>
                </FlexContent>

                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observations: " onChange={e => setDescription(e.target.value)}/>

                <h2>Markers</h2>
                
                <div className="tags">
                    {
                        tagsArray.map((tag, index) => (
                            <MovieItem 
                               key={String(index)}
                               value={tag}
                               onClick={() => {deleteTag(tag)}} 
                            />
                        ))
                    }

                    <MovieItem 
                        isNew 
                        placeholder="Insert a new tag"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag} 
                        onClick={handleAddTag}
                    />
                </div>

                <FlexContent>
                    <ExcludeButton name="delete" onClick={handleClearFields}>Clear Fields</ExcludeButton>
                    <Button title="Save" onClick={handleCreateNote}>Save alterations</Button>
                </FlexContent>

            </Form>

        </Container>
    )
}