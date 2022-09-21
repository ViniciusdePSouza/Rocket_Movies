import { Container, ButtonAdd, Content, Section } from './styles'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      await api.get('/tags').then(response => setTags(response.data))
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      let queryString = ''

      for (let i = 0; i < tags.length; i++) {
        if(i == 0){
          queryString = tags[i].tag_name      
        } else {
          queryString = queryString + `,${tags[i].tag_name}`
        }
      }
     await api.get(`/notes?user_id&title&movie_tags=${queryString}`).then(response => setNotes(response.data))
    }

    fetchNotes()
  }, [tags])


  return (
    <Container>
      <Header />

      <div>
        <Section>
          <h1>My Movies</h1>
          <ButtonAdd to="/new">
            <FiPlus />
            Add Movie
          </ButtonAdd>
        </Section>

        <Content>
          {
            notes.map(note => (
              <Card
                key={note.id}
                data={note}
                onClick={() => handlePreview(note.id)} 
                />
            ))
          }
        </Content>
      </div>

    </Container>
  )
}

