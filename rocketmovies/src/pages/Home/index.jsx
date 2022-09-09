import { Container, ButtonAdd, Content, Section } from './styles'

import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <div>
        <Section>
          <h1>My Movies</h1>
          <ButtonAdd type="button">
            <FiPlus />
            Add Movie
          </ButtonAdd>
        </Section>

        <Content>
          <Card data={{
            title: "Interestellar",
            tags:[
              {id: 1, name: 'Science Fiction'},
              {id: 2, name: 'Comedy'},
              {id: 3, name: 'Drama'}  
            ]
          }}/>
          <Card data={{
            title: "Hobbit",
            tags:[
              {id: 1, name: 'Science Fiction'},
              {id: 2, name: 'Comedy'},
              {id: 3, name: 'Fantasy'}  
            ]
          }}/>
          <Card data={{
            title: "Memento",
            tags:[,
              {id: 1, name: 'Comedy'},
              {id: 2, name: 'Drama'}  
            ]
          }}/>
        </Content>
      </div>

    </Container>
  )
}

