import { Container, ButtonAdd, Content, Section } from './styles'

import { Input } from '../../components/Input'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/notes')
      setNotes(response.data)
    }

    fetchNotes()
  })

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
                key={String(note.id)}
                data={note} />
            ))
          }
        </Content>
      </div>


    </Container>
  )
}

