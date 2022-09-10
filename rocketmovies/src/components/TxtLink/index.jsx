import { Container } from './styles'

export function TxtLink({ icon: Icon, instruction }) {
    return (
        <Container>
            { Icon && <Icon size={20} />}
            <a href="">{instruction}</a>
        </Container>
    )
}